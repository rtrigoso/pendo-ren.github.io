describe('RFQA setup page', function () {
	beforeEach(('setup'), function () {
		cy.viewport('macbook-15');
		cy.visit('/rfqaSetup.html');
	});
	it('goes to the RFQA setup page', function () {
		cy.url().should('include', '/rfqaSetup.html');
	});
	it('targets the pendo-test bucket', function () {
		var bucket = Cypress.$('#agentHost');
		expect(bucket).to.include.value('pendo-test-static.storage.googleapis.com');
		expect(bucket).to.be.disabled;
	});
	it('targets the RFQA key', function () {
		var sub = Cypress.$('#subKey');
		expect(sub).to.include.value('a7ca09a1-05cc-4173-6cef-7cd5adf3d671');
		expect(sub).to.be.disabled;
	});
	it('targets the RFQA sub', function () {
		var subName = Cypress.$('#accountName');
		expect(subName).to.include.value('RainforestQA');
		expect(subName).to.be.disabled;
	});
	it('allows user to provide visitorId and email', function () {
		cy.get('#visitorId').type('testsite');
		cy.get('#email').type('testsite@pendo.io');
	});
	it('allows user to set cookies using submitted values', function () {
		cy.get('#visitorId').type('testsite');
		cy.get('#email').type('testsite@pendo.io');
		cy.get('#submitButton').click();
		cy.getCookies()
			.then((cookies) => {
				expect(cookies).to.have.all.keys('accountName', 'agentHost', 'apiKey', 'email', 'visitorId', 'parentAccountActive')
			});
	});
});

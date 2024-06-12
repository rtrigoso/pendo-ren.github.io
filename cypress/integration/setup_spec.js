describe('Main setup page', function () {
	beforeEach(('setup'), function () {
		cy.viewport('macbook-15');
	});
	it('goes to the setup page', function () {
		cy.visit('');
		cy.url().should('include', '/setup.html');
	});
	it('can handle cookie population', function () {
		cy.visit('');
		cy.fixture('profiles')
			.then((data) => {
				cy.setTestCookies(data);
			});
		cy.visit('/index.html');
		cy.url().should('contain', 'index.html');
	});
});

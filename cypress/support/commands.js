Cypress.Commands.add('setTestCookies', function (profile) {
	var { accountId, accountName, agentHost, apiKey, email, parentAccountActive, visitorId } = profile;
	cy.setCookie('accountId', accountId);
	cy.setCookie('accountName', accountName);
	cy.setCookie('agentHost', agentHost);
	cy.setCookie('apiKey', apiKey);
	cy.setCookie('email', email);
	cy.setCookie('parentAccountActive', parentAccountActive);
	cy.setCookie('visitorId', visitorId);
});

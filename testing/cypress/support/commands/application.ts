import defaults from '../../fixtures/default.json';

Cypress.Commands.add('hasTitle', () => {
	cy.get('body h2').should('exist');
});

Cypress.Commands.add('hasCorrectUrl', (url, dataSelector) => {
	cy.visit(`${Cypress.config().baseUrl}${url}`)
	if(dataSelector) cy.get(`[data-cy=${dataSelector}]`).click();
	cy.url().should("include", url);
})

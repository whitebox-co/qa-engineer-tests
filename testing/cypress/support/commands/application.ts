import defaults from '../../fixtures/default.json';

Cypress.Commands.add('hasTitle', () => {
	cy.get('body h1').should('exist');
});
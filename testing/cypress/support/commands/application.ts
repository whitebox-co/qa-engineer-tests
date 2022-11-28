import defaults from '../../fixtures/default.json';

Cypress.Commands.add('joshTest', (linkName) => {
	cy.contains('.sidebar li', linkName).click();
});
describe('Example', () => {
	it('should load the page', () => {
		cy.visit('/');
		cy.get('body').should('exist');
	});
});

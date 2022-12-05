describe("Test admin dashboard UI", () => {
  it("should update the current admin url to be dashboard", () => {
    cy.hasCorrectUrl('/admin/dashboard', 'dashboard')
  });
  it('Search input text updates', () => {
    cy.hasCorrectUrl('/admin/dashboard', 'dashboard')
    cy.get('input[placeholder="Search here..."]').type('Melissa Price').should('have.value', 'Melissa Price')
  })
});

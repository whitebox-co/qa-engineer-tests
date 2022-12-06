describe("Test tables UI", () => {
    it("should update the current url to be tables", () => {
    cy.hasCorrectUrl('/admin/tables', 'tables')
    });
  });
  
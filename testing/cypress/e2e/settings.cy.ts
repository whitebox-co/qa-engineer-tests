describe("Test settings UI", () => {
    it("should update the current admin url to be settings", () => {
    cy.hasCorrectUrl('/admin/settings', 'settings')
    });
  });
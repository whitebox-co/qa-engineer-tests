describe("Test landing UI", () => {
  before(() => {
    cy.hasCorrectUrl("", "");
  });
  it("should navigate to admin dashboard", () => {
    cy.get("a").contains("Admin Dashboard").click()
    cy.url().should("include", '/admin/dashboard');
  });

//   todo: create test that opens new tab in github
});

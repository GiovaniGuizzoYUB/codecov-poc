describe("template spec", () => {
  it("visits page", () => {
    cy.visit("/");
  });

  it("input a number", () => {
    cy.visit("/");
    cy.get("[data-testid=input-field]").clear().type("10");
    cy.get("[data-testid=secret-text]").should("not.exist");
  });

  // it("input a secret", () => {
  //   cy.visit("/");
  //   cy.get("[data-testid=input-field]").clear().type("secret");
  //   cy.get("[data-testid=secret-text]").should("exist");
  // });
});

describe("Create Customer", () => {
  beforeEach(() => {
    cy.visitAndLogin();
  });

  it("fill out form", () => {
    cy.get("input[name='first_name']")
      .type("James")
      .should("have.value", "James");

    cy.get("input[name='last_name']")
      .type("Bishop")
      .should("have.value", "Bishop");

    cy.get("input[name='email']")
      .type("test@test.com")
      .should("have.value", "test@test.com");

    cy.get("input[name='birthday']").type("2000-01-01");

    cy.get("textarea[name='address']").type("1212 Testing St.");

    cy.get("input[name='zipcode']").type("90210");
    cy.get("input[name='city']").type("Beverly Hills");

    cy.get("input[name='password']").type("testpass123");
    cy.get("input[name='confirm_password']").type("testpass123");

    cy.get("button[type='submit']").as("submit").click();

    cy.get("#mui-component-select-groups").click();

    cy.get(".MuiMenu-list li").first().click();

    cy.get("#has_newsletter").click();

    cy.get(".MuiMenu-list li").eq(1).click();

    cy.get("button[type='submit']").as("submit").click();
  });
});

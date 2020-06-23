Cypress.Commands.add("seedAndVisit", (seedData = "fixture:todos") => {
  cy.server();
  cy.route("GET", "/api/todos", seedData);
  cy.visit("/");
});

Cypress.Commands.add(
  "visitAndLogin",
  (hostUrl = "https://marmelab.com/react-admin-demo/#/customers/create") => {
    cy.visit(hostUrl);
    cy.get("input[name='username']").type("demo");
    cy.get("input[name='password']").type("demo");
    cy.get("button[type='submit']").click();
  }
);

describe("Application Availability", function () {
  it("The application is accessible at localhost:3000", function () {
    cy.visit("/");
  });
});
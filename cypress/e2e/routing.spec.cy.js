describe("Testing the accessibility of application pages", function () {
  before(function () {
    cy.visit('/');
  });

  it("String Page is accessible via the link", function () {
    cy.visit('/recursion');
  });

  it("Fibonacci Sequence Page is accessible via the link", function () {
    cy.visit('/fibonacci');
  });

  it("Array Sorting Page is accessible via the link", function () {
    cy.visit('/sorting');
  });

  it("Stack Page is accessible via the link", function () {
    cy.visit('/stack');
  });

  it("Queue Page is accessible via the link", function () {
    cy.visit('/queue');
  });

  it("Linked List Page is accessible via the link", function () {
    cy.visit('/list');
  });

});
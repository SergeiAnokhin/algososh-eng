import { circle, input, button, defaultColor } from "../../src/constants/constans"

describe("Testing Fibonacci Sequence", function () {
  it("Page is accessible", function () {
    cy.visit("/fibonacci");
  });

  it("Calculate button is disabled when input is empty", function () {
    cy.get(input).clear().should("have.value", "");
    cy.get(button).should("have.attr", "disabled");
  });

  it("Calculate button is enabled when input is not empty", function () {
    cy.get(input).type("5").should("have.value", "5");
    cy.get(button).should("not.have.attr", "disabled");
    cy.get(input).clear().should("have.value", "");
  });

  it("Fibonacci sequence is generated correctly", function () {
    cy.get(input).type("5").should("have.value", "5");
    cy.get(button).should("not.have.attr", "disabled");
    cy.get(button).click();

    cy.get(circle)
      .should("have.length", 6)
      .each(($circle, index) => {
        cy.get($circle).should("have.css", "border-color", defaultColor);
      });
  });
});
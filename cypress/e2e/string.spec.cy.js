import { DELAY_IN_MS } from "./../../src/constants/delays";
import { circle, input, button, defaultColor, changingColor, modifiedColor } from "../../src/constants/constans"

describe("Testing string reversal", function () {
  const stringLength = 5;
  const initialString = 'hello';
  const stringInProcess = 'oellh';
  const stringFinal = 'olleh';
  const initialColorArr = [
    changingColor,
    defaultColor,
    defaultColor,
    defaultColor,
    changingColor,
  ];
  const changingColorArr = [
    modifiedColor,
    changingColor,
    defaultColor,
    changingColor,
    modifiedColor,
  ];
  const finalColorArr = [
    modifiedColor,
    modifiedColor,
    modifiedColor,
    modifiedColor,
    modifiedColor,
  ];

  it("Page is accessible", function () {
    cy.visit("/recursion");
  });

  it("Reverse button is disabled when input is empty", function () {
    cy.get(input).clear().should("have.value", "");
    cy.get(button).should("have.attr", "disabled");
  });

  it("Reverse button is enabled when input is not empty", function () {
    cy.get(input)
      .type("Test")
      .should("have.value", "Test");
    cy.get(button).should("not.have.attr", "disabled");
    cy.get(input).clear().should("have.value", "");
  });

  it("String is reversed correctly", function () {
    cy.get(input)
      .type(initialString)
      .should("have.value", initialString);
    cy.get(button).should("not.have.attr", "disabled");
    cy.get(button).click();

    cy.get(circle).each(($el, index, $list) => {
      cy.get($list).should("have.length", stringLength);
      cy.get($el).contains(initialString[index]);
      cy.get($el).should("have.css", "border-color", initialColorArr[index]);
    });

    cy.wait(DELAY_IN_MS);

    cy.get(circle).each(($el, index, $list) => {
      cy.get($list).should("have.length", stringLength);
      cy.get($el).contains(stringInProcess[index]);
      cy.get($el).should("have.css", "border-color", changingColorArr[index]);
    });

    cy.wait(DELAY_IN_MS);

    cy.get(circle).each(($el, index, $list) => {
      cy.get($list).should("have.length", stringLength);
      cy.get($el).contains(stringFinal[index]);
      cy.get($el).should("have.css", "border-color", finalColorArr[index]);
    });
  })
});
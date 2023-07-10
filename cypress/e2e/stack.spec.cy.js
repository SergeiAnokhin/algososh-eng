import { SHORT_DELAY_IN_MS } from "../../src/constants/delays";
import {
  input,
  addBtn,
  deleteBtn,
  resetBtn,
  circle,
  head,
  index,
  canvas,
  defaultColor,
  changingColor
} from "../../src/constants/constans"

describe("Testing Stack Functionality", function () {

  it("Page is accessible", function () {
    cy.visit("/stack");
  });

  it("Add button is disabled when input is empty", function () {
    cy.get(input).clear().should("have.value", "");
    cy.get(addBtn).should("have.attr", "disabled");
  });

  it("Add button is enabled when input is not empty", function () {
    cy.get(input).type("5").should("have.value", "5");
    cy.get(addBtn).should("not.have.attr", "disabled");
    cy.get(input).clear().should("have.value", "");
    cy.get(addBtn).should("have.attr", "disabled");
  });

  it("Adding the first element to the Stack works correctly", function () {
    cy.get(input).type("1").should("have.value", "1");
    cy.get(addBtn).click();

    cy.get(circle).within(($letters) => {
      expect($letters).to.have.length(1);
      expect($letters.eq(0)).to.contain("1");
      cy.get($letters.eq(0)).should("have.css", "border-color", changingColor);
    });

    cy.wait(SHORT_DELAY_IN_MS);

    cy.get(circle).within(($letters) => {
      expect($letters).to.have.length(1);
      expect($letters.eq(0)).to.contain("1");
      cy.get($letters.eq(0)).should("have.css", "border-color", defaultColor);
    });

    cy.get(head).within(($head) => {
      expect($head.eq(0)).to.contain("top");
    });

    cy.get(index).each(($el, index, $list) => {
      expect($el).to.contain(index);
    });

    cy.get(input).should("be.empty");

  });

  it("Adding the second element to the Stack works correctly", function () {

    cy.get(input).type("2").should("have.value", "2");
    cy.get(addBtn).should("not.have.attr", "disabled");
    cy.get(addBtn).click();

    cy.get(circle).within(($letters) => {
      expect($letters).to.have.length(2);
      expect($letters.eq(0)).to.contain("1");
      cy.get($letters.eq(0)).should("have.css", "border-color", defaultColor);
      expect($letters.eq(1)).to.contain("2");
      cy.get($letters.eq(1)).should("have.css", "border-color", changingColor);
    });

    cy.wait(SHORT_DELAY_IN_MS);

    cy.get(circle).within(($letters) => {
      cy.get($letters.eq(1)).should("have.css", "border-color", defaultColor);
    });

    cy.get(head).within(($head) => {
      expect($head.eq(1)).to.contain("top");
    });

    cy.get(index).each(($el, index, $list) => {
      expect($el).to.contain(index);
    });

    cy.get(input).should("be.empty");

  });

  it("Removing an element from the Stack works correctly", function () {

    cy.get(deleteBtn).click();

    cy.get(circle).within(($letters) => {
      expect($letters).to.have.length(2);
      expect($letters.eq(0)).to.contain("1");
      cy.get($letters.eq(0)).should("have.css", "border-color", defaultColor);
      expect($letters.eq(1)).to.contain("2");
      cy.get($letters.eq(1)).should("have.css", "border-color", changingColor);
    });

    cy.wait(SHORT_DELAY_IN_MS);

    cy.get(circle).within(($letters) => {
      expect($letters).to.have.length(1);
      expect($letters.eq(0)).to.contain("1");
      cy.get($letters.eq(0)).should("have.css", "border-color", defaultColor);
    });

    cy.get(head).within(($head) => {
      expect($head.eq(0)).to.contain("top");
    });

    cy.get(index).each(($el, index, $list) => {
      expect($el).to.contain(index);
    });

    cy.get(input).should("be.empty");

  });

  it("Clearing the Stack works correctly", function () {
    cy.get(resetBtn).should("not.have.attr", "disabled");
    cy.get(resetBtn).click();

    cy.wait(SHORT_DELAY_IN_MS);

    cy.get(input).clear().should("have.value", "");
    cy.get(addBtn).should("have.attr", "disabled");
    cy.get(deleteBtn).should("have.attr", "disabled");
    cy.get(resetBtn).should("have.attr", "disabled");

    cy.get(canvas).each(($list) => {
      expect($list).to.contain('')
    })

  });
});
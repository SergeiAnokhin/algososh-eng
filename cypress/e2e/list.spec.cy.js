import { DELAY_IN_MS, SHORT_DELAY_IN_MS } from "../../src/constants/delays";

import {
  addHeadBtn,
  addTailBtn,
  deleteHeadBtn,
  deleteTailBtn,
  addIndexBtn,
  deleteIndexBtn,
  inputValue,
  inputIndex,
  circle,
  smallCircle,
  head,
  tail,
  letter,
  defaultColor,
  changingColor,
  modifiedColor,
  index
} from "../../src/constants/constans";

describe("Testing Linked List", function () {

  const newElement = "25";
  const newIndex = "1"

  it("Page opens", function () {
    cy.visit("/list");
  });

  it("Add to Head and Tail buttons are disabled when input is empty", function () {
    cy.get(inputValue).clear().should("have.value", "");
    cy.get(addHeadBtn).should("have.attr", "disabled");
    cy.get(addTailBtn).should("have.attr", "disabled");
  });

  it("Add to Head and Tail buttons are enabled when input is not empty", function () {
    cy.get(inputValue).type("10").should("have.value", "10");
    cy.get(addHeadBtn).should("not.have.attr", "disabled");
    cy.get(addTailBtn).should("not.have.attr", "disabled");
    cy.get(inputValue).clear().should("have.value", "");
    cy.get(addHeadBtn).should("have.attr", "disabled");
    cy.get(addTailBtn).should("have.attr", "disabled");
  });

  it("Add and Delete by Index buttons are disabled when input is empty", function () {
    cy.get(inputIndex).clear().should("have.value", "");
    cy.get(addIndexBtn).should("have.attr", "disabled");
    cy.get(deleteIndexBtn).should("have.attr", "disabled");
  });

  it("Delete by Index button is enabled when input is not empty", function () {
    cy.get(inputIndex).type("1").should("have.value", "1");
    cy.get(deleteIndexBtn).should("not.have.attr", "disabled");
    cy.get(inputIndex).clear().should("have.value", "");
    cy.get(deleteIndexBtn).should("have.attr", "disabled");
  });

  it("Add and Delete by Index buttons are enabled when inputs are not empty", function () {
    cy.get(inputValue).type("10").should("have.value", "10");
    cy.get(inputIndex).type("1").should("have.value", "1");
    cy.get(addHeadBtn).should("not.have.attr", "disabled");
    cy.get(addTailBtn).should("not.have.attr", "disabled");
    cy.get(addIndexBtn).should("not.have.attr", "disabled");
    cy.get(deleteIndexBtn).should("not.have.attr", "disabled");

    cy.get(inputValue).clear().should("have.value", "");
    cy.get(inputIndex).clear().should("have.value", "");
    cy.get(addHeadBtn).should("have.attr", "disabled");
    cy.get(addTailBtn).should("have.attr", "disabled");
    cy.get(addIndexBtn).should("have.attr", "disabled");
    cy.get(deleteIndexBtn).should("have.attr", "disabled");
  });

  it("Default list is rendered correctly", function () {
    cy.get(circle).should("have.length", "4")
    cy.get(letter).should("have.length", "4")
    cy.get(head).each(($head, index) => {
      if (index === 0) cy.wrap($head).contains("head")
    })
    cy.get(tail).each(($tail, index) => {
      if (index === 3) cy.wrap($tail).contains("tail")
    })
  });

  it("Adding to Head is done correctly", function () {

    cy.get(inputValue).should("be.empty");
    cy.get(inputValue).type(newElement);

    cy.get(addHeadBtn).click();

    cy.get(smallCircle).contains(newElement);
    cy.get(smallCircle).should("have.css", "border-color", changingColor);

    cy.wait(SHORT_DELAY_IN_MS);

    cy.get(circle).should("have.length", "5")

    cy.get(circle).each(($el, index, $list) => {
      cy.get($list.eq(0)).should("have.css", "border-color", modifiedColor);
      cy.get($list.eq(1)).should("have.css", "border-color", defaultColor);
      cy.get($list.eq(2)).should("have.css", "border-color", defaultColor);
      cy.get($list.eq(3)).should("have.css", "border-color", defaultColor);
      cy.get($list.eq(4)).should("have.css", "border-color", defaultColor);
    });

    cy.wait(SHORT_DELAY_IN_MS);

    cy.get(circle).each(($el) => {
      cy.get($el).should("have.css", "border-color", defaultColor);
    });

    cy.get(head).within(($head) => {
      cy.get($head.eq(0)).should("contain", "head");
      cy.get($head.eq(1)).should("contain", "");
      cy.get($head.eq(2)).should("contain", "");
      cy.get($head.eq(3)).should("contain", "");
      cy.get($head.eq(4)).should("contain", "");
    });

    cy.get(tail).within(($tail) => {
      cy.get($tail.eq(0)).should("contain", "");
      cy.get($tail.eq(1)).should("contain", "");
      cy.get($tail.eq(2)).should("contain", "");
      cy.get($tail.eq(3)).should("contain", "");
      cy.get($tail.eq(4)).should("contain", "tail");
    });

    cy.get(index).each(($el, index, $list) => {
      cy.get($el).should("contain", index);
    });
  });

  it("Adding to Tail is done correctly", function () {
    cy.get(inputValue).should("be.empty");
    cy.get(inputValue).type(newElement);

    cy.get(addTailBtn).click();

    cy.get(smallCircle).contains(newElement);
    cy.get(smallCircle).should("have.css", "border-color", changingColor);

    cy.wait(SHORT_DELAY_IN_MS);

    cy.get(circle).should("have.length", 6);

    cy.get(circle).each(($el, index, $list) => {
      cy.get($list.eq(0)).should("have.css", "border-color", defaultColor);
      cy.get($list.eq(1)).should("have.css", "border-color", defaultColor);
      cy.get($list.eq(2)).should("have.css", "border-color", defaultColor);
      cy.get($list.eq(3)).should("have.css", "border-color", defaultColor);
      cy.get($list.eq(4)).should("have.css", "border-color", defaultColor);
      cy.get($list.eq(5)).should("have.css", "border-color", modifiedColor);
    });

    cy.wait(SHORT_DELAY_IN_MS);

    cy.get(circle).each(($el) => {
      cy.get($el).should("have.css", "border-color", defaultColor);
    });

    cy.get(head).within(($head) => {
      cy.get($head.eq(0)).should("contain", "head");
      cy.get($head.eq(1)).should("contain", "");
      cy.get($head.eq(2)).should("contain", "");
      cy.get($head.eq(3)).should("contain", "");
      cy.get($head.eq(4)).should("contain", "");
      cy.get($head.eq(5)).should("contain", "");
    });

    cy.get(tail).within(($tail) => {
      cy.get($tail.eq(0)).should("contain", "");
      cy.get($tail.eq(1)).should("contain", "");
      cy.get($tail.eq(2)).should("contain", "");
      cy.get($tail.eq(3)).should("contain", "");
      cy.get($tail.eq(4)).should("contain", "");
      cy.get($tail.eq(5)).should("contain", "tail");
    });

    cy.get(index).each(($el, index, $list) => {
      cy.get($el).should("contain", index);
    });
  });

  it("Deleting from Head is done correctly", function () {
    cy.get(deleteHeadBtn).click();

    cy.get(smallCircle).contains(newElement);
    cy.get(smallCircle).should("have.css", "border-color", changingColor);

    cy.wait(SHORT_DELAY_IN_MS);

    cy.get(circle).should("have.length", 5);

    cy.get(circle).each(($el) => {
      cy.get($el).should("have.css", "border-color", defaultColor);
    });

    cy.get(head).within(($head) => {
      cy.get($head.eq(0)).should("contain", "head");
      cy.get($head.eq(1)).should("contain", "");
      cy.get($head.eq(2)).should("contain", "");
      cy.get($head.eq(3)).should("contain", "");
      cy.get($head.eq(4)).should("contain", "");
    });

    cy.get(tail).within(($tail) => {
      cy.get($tail.eq(0)).should("contain", "");
      cy.get($tail.eq(1)).should("contain", "");
      cy.get($tail.eq(2)).should("contain", "");
      cy.get($tail.eq(3)).should("contain", "");
      cy.get($tail.eq(4)).should("contain", "tail");
    });

    cy.get(index).each(($el, index, $list) => {
      cy.get($el).should("contain", index);
    });
  });

  it("Deleting from Tail is done correctly", function () {
    cy.get(deleteTailBtn).click();

    cy.get(smallCircle).contains(newElement);
    cy.get(smallCircle).should("have.css", "border-color", changingColor);

    cy.wait(SHORT_DELAY_IN_MS);

    cy.get(circle).should("have.length", 4);

    cy.get(circle).each(($el) => {
      cy.get($el).should("have.css", "border-color", defaultColor);
    });

    cy.get(head).within(($head) => {
      cy.get($head.eq(0)).should("contain", "head");
      cy.get($head.eq(1)).should("contain", "");
      cy.get($head.eq(2)).should("contain", "");
      cy.get($head.eq(3)).should("contain", "");
    });

    cy.get(tail).within(($tail) => {
      cy.get($tail.eq(0)).should("contain", "");
      cy.get($tail.eq(1)).should("contain", "");
      cy.get($tail.eq(2)).should("contain", "");
      cy.get($tail.eq(3)).should("contain", "tail");
    });

    cy.get(index).each(($el, index, $list) => {
      cy.get($el).should("contain", index);
    });
  });

  it("Adding by Index is done correctly", function () {
    cy.get(inputValue).should("be.empty");
    cy.get(inputValue).type(newElement);

    cy.get(inputIndex).should("be.empty");
    cy.get(inputIndex).type(newIndex);

    cy.get(addIndexBtn).click();

    cy.get(smallCircle).contains(newElement);
    cy.get(smallCircle).should("have.css", "border-color", changingColor);

    cy.wait(SHORT_DELAY_IN_MS);

    cy.get(circle).each(($el, index, $list) => {
      cy.get($list.eq(0)).should("have.css", "border-color", defaultColor);
    });

    cy.wait(SHORT_DELAY_IN_MS);

    cy.get(circle).each(($el, index, $list) => {
      cy.get($list.eq(0)).should("have.css", "border-color", changingColor);
    });

    cy.get(circle).should("have.length", 5);

    cy.get(circle).each(($el, index, $list) => {
      cy.get($list.eq(0)).should("have.css", "border-color", defaultColor);
      cy.get($list.eq(1)).should("have.css", "border-color", modifiedColor);
      expect($list.eq(1)).to.contain(newElement);
      cy.get($list.eq(2)).should("have.css", "border-color", defaultColor);
      cy.get($list.eq(3)).should("have.css", "border-color", defaultColor);
      cy.get($list.eq(4)).should("have.css", "border-color", defaultColor);
    });

    cy.wait(SHORT_DELAY_IN_MS);

    cy.get(circle).each(($el) => {
      cy.get($el).should("have.css", "border-color", defaultColor);
    });

    cy.get(head).within(($head) => {
      cy.get($head.eq(0)).should("contain", "head");
      cy.get($head.eq(1)).should("contain", "");
      cy.get($head.eq(2)).should("contain", "");
      cy.get($head.eq(3)).should("contain", "");
      cy.get($head.eq(4)).should("contain", "");
    });

    cy.get(tail).within(($tail) => {
      cy.get($tail.eq(0)).should("contain", "");
      cy.get($tail.eq(1)).should("contain", "");
      cy.get($tail.eq(2)).should("contain", "");
      cy.get($tail.eq(3)).should("contain", "");
      cy.get($tail.eq(4)).should("contain", "tail");
    });

    cy.get(index).each(($el, index, $list) => {
      cy.get($el).should("contain", index);
    });
  });

  it("Deleting by Index is done correctly", function () {
    cy.get(inputIndex).should("be.empty");
    cy.get(inputIndex).type(newIndex);
    cy.get(deleteIndexBtn).click();

    cy.get(circle).each(($el, index, $list) => {
      cy.get($list.eq(0)).should("have.css", "border-color", defaultColor);
      cy.get($list.eq(1)).should("have.css", "border-color", defaultColor);
      cy.get($list.eq(2)).should("have.css", "border-color", defaultColor);
      cy.get($list.eq(3)).should("have.css", "border-color", defaultColor);
      cy.get($list.eq(4)).should("have.css", "border-color", defaultColor);
    });

    cy.wait(DELAY_IN_MS);

    cy.get(circle).each(($el, index, $list) => {
      cy.get($list.eq(0)).should("have.css", "border-color", changingColor);
      cy.get($list.eq(1)).should("have.css", "border-color", defaultColor);
      cy.get($list.eq(2)).should("have.css", "border-color", defaultColor);
      cy.get($list.eq(3)).should("have.css", "border-color", defaultColor);
      cy.get($list.eq(4)).should("have.css", "border-color", defaultColor);
    });

    cy.get(smallCircle).contains(newElement);
    cy.get(smallCircle).should("have.css", "border-color", changingColor);

    cy.wait(SHORT_DELAY_IN_MS);

    cy.get(circle).should("have.length", 4);

    cy.get(circle).each(($el) => {
      cy.get($el).should("have.css", "border-color", defaultColor);
    });

    cy.get(head).within(($head) => {
      cy.get($head.eq(0)).should("contain", "head");
      cy.get($head.eq(1)).should("contain", "");
      cy.get($head.eq(2)).should("contain", "");
      cy.get($head.eq(3)).should("contain", "");
    });

    cy.get(tail).within(($tail) => {
      cy.get($tail.eq(0)).should("contain", "");
      cy.get($tail.eq(1)).should("contain", "");
      cy.get($tail.eq(2)).should("contain", "");
      cy.get($tail.eq(3)).should("contain", "tail");
    });

    cy.get(index).each(($el, index, $list) => {
      cy.get($el).should("contain", index);
    });
  });
});
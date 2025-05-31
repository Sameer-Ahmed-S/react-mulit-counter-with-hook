import React from "react";
import ParentCounter from "../../src/Parent";

describe("ParentComponent />", () => {
  it("initializes each Counter with the correct value", () => {
    cy.mount(<ParentCounter />);
    cy.get("p").eq(0).should("contain", "2");
    cy.get("p").eq(1).should("contain", "3");
    cy.get("p").eq(2).should("contain", "4");
  });

  it("increments the counter value on clicking '+' button", () => {
    cy.mount(<ParentCounter />);
    // Assuming we're testing the first counter as an example
    cy.get("button").contains("+").first().click();
    cy.get("p").first().should("contain", "3"); // Initial value of 2, incremented to 3
  });

  it("decrements the counter value on clicking '-' button", () => {
    cy.mount(<ParentCounter />);
    // To decrement, ensure the counter has been incremented at least once if starting from its initial value
    // For simplicity, let's directly test the decrement functionality, assuming the initial setup allows it
    cy.get("button").contains("-").first().click();
    cy.get("p").first().should("contain", "1"); // Assuming the counter was initially at 2, decremented to 1
  });
});

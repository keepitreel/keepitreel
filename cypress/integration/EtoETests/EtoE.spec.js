describe("movie search", () => {
  it("movie search", () => {
    cy.visit("http://localhost:3000/#/search");
    cy.get("#input-search-movie").type("terminator");
    cy.get("#search-mov-btn").click();
  });
});

describe("home button click to home page", () => {
  it("Should be able to click logo button to go home", () => {
    cy.visit("http://localhost:3000/#/");
    cy.get(".logo").click();
  });
});

describe("Home page successfully loaded", () => {
  it("Should load the page", () => {
    cy.visit("http://localhost:3000/#/");
  });
});
describe("Dashboard successfully loaded", () => {
  it("Should load the login view", () => {
    cy.visit("http://localhost:3000/#/dashboard");
  });
});
describe("Movie search page successfully loaded", () => {
  it("Should load the register view", () => {
    cy.visit("http://localhost:3000/#/search");
  });
});
describe("Alex page successfully loaded", () => {
  it("Should load the multi garage view", () => {
    cy.visit("http://localhost:3000/#/userpage/16");
  });
});

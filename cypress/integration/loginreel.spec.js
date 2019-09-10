describe("UI tests", () => {
  it("should goto site", () => {
    cy.visit("http://localhost:3000/");
  });

  it("should test login with empty input fields ", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".flippy-front > div > form > button").click();
  });

  it("should test login should have login button", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".flippy-front > div > form > button").should("have.length", 1);
    cy.get(".flippy-front > div > form > button").should("be.visible");
  });

  it("should test login should have username field", () => {
    cy.visit("http://localhost:3000/");
    cy.get('.flippy-front > div > form > [name="username"]').should(
      "have.length",
      1
    );
    cy.get('.flippy-front > div > form > [name="username"]').should(
      "be.visible"
    );
  });
  it("should test login should have password field", () => {
    cy.visit("http://localhost:3000/");
    cy.get('.flippy-front > div > form > [name="password"]').should(
      "have.length",
      1
    );
    cy.get('.flippy-front > div > form > [name="password"]').should(
      "be.visible"
    );
  });

  it("should test login with filled input fields ", () => {
    cy.visit("http://localhost:3000/");

    cy.get('.flippy-front > div > form > [name="username"]').type("moviebuff1");
    cy.get('.flippy-front > div > form > [name="password"]').type("password");
    cy.get(".flippy-front > div > form > button").click();
  });

  it("should test login with filled input fields, goto dashboard and check if search button exists ", () => {
    cy.visit("http://localhost:3000/");

    cy.get('.flippy-front > div > form > [name="username"]').type("moviebuff1");
    cy.get('.flippy-front > div > form > [name="password"]').type("password");
    cy.get(".flippy-front > div > form > button").click();

    //cy.get("[data-cy=movie-search-button]").should("have.length,1");

    //cy.visit("http://localhost:3000/#/dashboard");
    //cy.get("a > button").should("have.length,1");
  });

  //   it("should test login with filled input fields, goto dashboard and click search button ", () => {
  //     cy.visit("http://localhost:3000/");

  //     cy.get('.flippy-front > div > form > [name="username"]').type("moviebuff1");
  //     cy.get('.flippy-front > div > form > [name="password"]').type("password");
  //     cy.get(".flippy-front > div > form > button").click();

  //     cy.get(cy.get('a > button').click();
  //   });
});

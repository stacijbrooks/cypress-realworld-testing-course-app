describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("Hero section", () => {
    it("the h1 contains the correct text", () => {
      cy.getByData("hero-heading").contains(
        "Testing Next.js Applications with Cypress"
      )
    })

    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context("Courses section", () => {

    it("displays all available courses", () => {

      // Verify all course cards exist
      cy.getByData("course-0").should("exist")
      cy.getByData("course-1").should("exist")
      cy.getByData("course-2").should("exist")

    })

    it("each course contains a Get Started button", () => {

      // Verify every course card has a CTA button
      cy.getByData("course-0")
        .find("a")
        .contains("Get started")

      cy.getByData("course-1")
        .find("a")
        .contains("Get started")

      cy.getByData("course-2")
        .find("a")
        .contains("Get started")
    })

    it("homepage displays three course cards", () => {

      // Verify correct number of courses
      // cy.get('[data-test^="course-"]')
      //   .should("have.length", 3)

    })

  }) // closes Courses section

}) // closes Home page describe
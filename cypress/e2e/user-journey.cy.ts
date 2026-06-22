describe("User Journey", () => {
    it("a user can find a course on the same home page and complete the courses lessons", () => {
        cy.visit("http://localhost:3000")

        cy.getByData("course-0")
          .find("a")
          .eq(3)
          .click()

        cy.location("pathname")
          .should("eq", "/testing-your-first-application")
        cy.getByData("next-lesson-button").click()
        cy.location("pathname").should(
            "eq",
            "/testing-your-first-application/app-install-and-overview"
        )

        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").should("exist").click()
        cy.location("pathname").should(
            "eq",
            "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
        )
    })
    it("allows a user to navigate through multiple lessons", () => {


// Open first course
cy.visit("http://localhost:3000")

cy.getByData("course-0")
    .find("a")
    .eq(3)
    .click()

// Move through lesson sequence
cy.getByData("next-lesson-button").click()

cy.getByData("challenge-answer-0").click()

cy.getByData("next-lesson-button").click()

// Verify user reached expected lesson
cy.location("pathname")
    .should(
        "include",
        "installing-cypress-and-writing-our-first-test"
    )


})

it("displays the next lesson button when a challenge is completed", () => {


cy.visit(
    "http://localhost:3000/testing-your-first-application/app-install-and-overview"
)

// Complete challenge
cy.getByData("challenge-answer-0").click()

// Verify user can continue
cy.getByData("next-lesson-button")
    .should("be.visible")

})
})
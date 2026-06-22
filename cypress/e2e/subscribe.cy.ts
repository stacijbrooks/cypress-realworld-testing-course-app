describe("Newsletter Subscribe Form", () => {

// Runs before every test
// Opens the application homepage
beforeEach(() => {
    cy.visit("http://localhost:3000")
})

it("allows users to subscribe to the email list", () => {

  // Verify field exists
  cy.get('[name="email-address"]')
    .should("exist")

  // Type email
  cy.get('[name="email-address"]')
    .type("tom@aol.com")

  // Verify email was actually entered
  cy.get('[name="email-address"]')
    .should("have.value", "tom@aol.com")

  // Click submit
  cy.getByData("submit-button")
    .click()

})

it("does not allow an invalid email address", () => {

  // Enter an invalid email
  cy.get('[name="email-address"]')
    .type("tom")

  // Click submit
  cy.getByData("submit-button")
    .click()

  // Verify the input is considered invalid
  cy.get('[name="email-address"]')
    .then(($input) => {
      expect($input[0].checkValidity()).to.be.false
    })

})

it("does not allow a blank email address", () => {

  // Click submit without entering an email
  cy.getByData("submit-button")
    .click()

  // Verify the email field is invalid
  cy.get('[name="email-address"]')
    .then(($input) => {
      expect($input[0].checkValidity()).to.be.false
    })
})
})
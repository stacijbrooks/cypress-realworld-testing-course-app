describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("allows users to subscribe to the email list", () => {
     cy.get('[name="email-address"]').type("tom@aol.com")
     cy.getByData("submit-button").click()
})
// it("does NOT allow an invalid email address", () => {
//      cy.get('[name="email-address"]').type("tom")
//      cy.getByData("submit-button").click()

})
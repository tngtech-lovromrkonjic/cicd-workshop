// app.spec.js created with Cypress
//
describe('The app', () => {
    it('tells that you are a Croat', () => {
        cy.visit('')
        cy.get('h1')
        .should('have.text', 'Hello, my name is Lovro Mrkonjić!')
    })
  })

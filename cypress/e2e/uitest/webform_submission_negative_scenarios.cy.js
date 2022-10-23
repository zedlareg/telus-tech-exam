/// <reference types="Cypress" />

describe('Form Submission - Negative Scenarios', () => {

before(() => {
  cy.visit('https://josephyap9.wixsite.com/qaetestsite')
})

  it('should have a maximum 100 characters for NAME', () => {
    it('should successfully enter the SQAE name', () => {
      cy.get('input#input_comp-l46hci9f1').type('Lorem ipsum dolor sit amet. Ut cupiditate repellat qui aliquam placeat et voluptatem assumenda aut explicabo incidunt eum quia aspernatur qui temporibus eius sed asperiores placeat? Aut nihil alias id dolor commodi At animi modi ut mollitia praesentium ut saepe velit aut corrupti unde et culpa ipsam. Non necessitatibus laboriosam et explicabo vero rem quia aliquid aut corrupti velit')
      
      cy.get('input#input_comp-l46hci9f1').should('have.length', 'Lorem ipsum dolor sit amet. Ea magni beatae et sint itaque ut quod asperiores sed pariatur nobis quo1gg')
    })
  })

  it('should not submit the form without filling-up all the required fields', () => {
    cy.get('._2UgQw ._1fbEI ._1Qjd7').click()
    cy.get('#comp-l46hciag3 .font_8 .color_15').should('not.be.visible')

  })

})
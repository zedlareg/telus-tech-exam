/// <reference types="Cypress" />

describe('Successful Webform Submission', () => {

  it('should successfully navigate to QAE TEST SITE', () => {
    cy.visit('https://josephyap9.wixsite.com/qaetestsite')
    cy.get('p.font_0').should('have.text', 'QAE TEST SITE')
  })

  it('should successfully enter the SQAE name', () => {
    cy.get('input#input_comp-l46hci9f1').type('Adonis B. Geraldez')
    cy.get('input#input_comp-l46hci9f1').should('have.value', 'Adonis B. Geraldez')
  })

  it('should successfully enter the Email of SQAE', () => {
    cy.get('input[placeholder="Enter your email"]').type('dongeraldez@gmail.com')
    cy.get('input[placeholder="Enter your email"]').should('have.value', 'dongeraldez@gmail.com')
  })

  it('should able to select the Desired Position', () => {
    cy.get('select#collection_comp-l46hci9n').select('SQAE').should('have.value', 'SQAE')
  })

  it('should successfully enter the Phone number', () => {
    cy.get('input[placeholder="Enter your phone number"]').type('+63(0)9273837843')
    cy.get('input[placeholder="Enter your phone number"]').should('have.value', '+63(0)9273837843')
  })

  it('should be able to enter the Date of Availability', () => {
    cy.get('div[class="TUQC6"]').click()
    cy.get('button[data-testid="nextMonth"]').click().click()
    //cy.get('._1gCtg').each(($el,index,$list) => {
    cy.get('._1gCtg').each(($el) => {
      var dateName = $el.text()
      if(dateName=='1') {
        cy.wrap($el).click()
      }
    })
    cy.get('input#input_comp-l46hci9y2').should('have.value', '12/01/2022')
  })

  it('should be able to enter the Expected Salary', () => {
    cy.get('input[placeholder="Enter a number"]').click().type('10')
    cy.get('input[placeholder="Enter a number"]').should('have.value', '10')
  })

  it('should be able to indicate the Years of Experiene', () => {
    cy.get('input[value="> 5 Years"]').click({force: true}).should('be.checked')
  })

  it('should be able to select all the applicable Skills', () => {
    cy.get('input[value="Manual Testing"]').click().should('be.checked')
    cy.get('input[value="API Testing"]').click().should('be.checked')
    cy.get('input[value="Automated Testing"]').click().should('be.checked')
  })

  it('should select/check the CONFIRMATION ', () => {
    cy.get('label[id="comp-l46hciac1"] ._3ESMu').click().should('be.checked')
  })

  it('should able to Submit all the information', () => {
    cy.get('._2UgQw ._1fbEI ._1Qjd7').click()
    cy.get('#comp-l46hciag3 .font_8 .color_15').should('be.visible')
  })

})
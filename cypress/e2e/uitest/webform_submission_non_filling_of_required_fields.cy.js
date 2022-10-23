/// <reference types="Cypress" />

describe('Form Submission Without Filling-up the Required Fields', () => {

before(() => {
  cy.visit('https://josephyap9.wixsite.com/qaetestsite')
})
  it('should successfully submit the form without filling-up the Phone field', () => {
    cy.get('input#input_comp-l46hci9f1').clear().type('Adonis B. Geraldez')
    cy.get('input[placeholder="Enter your email"]').clear().type('dongeraldez@gmail.com')
    cy.get('select#collection_comp-l46hci9n').select('SQAE')

    cy.get('div[class="TUQC6"]').click()
    cy.get('button[data-testid="nextMonth"]').click().click()
    //cy.get('._1gCtg').each(($el,index,$list) => {
    cy.get('._1gCtg').each(($el) => {
      var dateName = $el.text()
      if(dateName=='1') {
        cy.wrap($el).click()
      } 
    })

    cy.get('input[placeholder="Enter a number"]').click().type('10')
    cy.get('input[value="> 5 Years"]').click({force: true})
    cy.get('input[value="Manual Testing"]').click()
    cy.get('input[value="API Testing"]').click()
    cy.get('input[value="Automated Testing"]').click()
    
    cy.get('label[id="comp-l46hciac1"] ._3ESMu').click()
    cy.get('._2UgQw ._1fbEI ._1Qjd7').click()
    cy.get('#comp-l46hciag3 .font_8 .color_15').should('be.visible')
  })

  it('should successfully submit the form without filling-up the Expected Salary field', () => {
    cy.visit('https://josephyap9.wixsite.com/qaetestsite')
    cy.get('input#input_comp-l46hci9f1').clear().type('Adonis B. Geraldez')
    cy.get('input[placeholder="Enter your email"]').clear().type('dongeraldez@gmail.com')
    cy.get('select#collection_comp-l46hci9n').select('SQAE')
    cy.get('input[placeholder="Enter your phone number"]').type('+63(0)9273837843')

    cy.get('div[class="TUQC6"]').click()
    cy.get('button[data-testid="nextMonth"]').click().click()
    //cy.get('._1gCtg').each(($el,index,$list) => {
    cy.get('._1gCtg').each(($el) => {
      var dateName = $el.text()
      if(dateName=='1') {
        cy.wrap($el).click()
      } 
    })

    cy.get('input[value="> 5 Years"]').click({force: true})
    cy.get('input[value="Manual Testing"]').click()
    cy.get('input[value="API Testing"]').click()
    cy.get('input[value="Automated Testing"]').click()
    
    cy.get('label[id="comp-l46hciac1"] ._3ESMu').click()
    cy.get('._2UgQw ._1fbEI ._1Qjd7').click()
    cy.get('#comp-l46hciag3 .font_8 .color_15').should('be.visible')
  })

  it('should successfully submit the form without filling-up the Years of Experience field', () => {
    cy.get('input#input_comp-l46hci9f1').clear().type('Adonis B. Geraldez')
    cy.get('input[placeholder="Enter your email"]').clear().type('dongeraldez@gmail.com')
    cy.get('select#collection_comp-l46hci9n').select('SQAE')
    cy.get('input[placeholder="Enter your phone number"]').type('+63(0)9273837843')

    cy.get('div[class="TUQC6"]').click()
    cy.get('button[data-testid="nextMonth"]').click().click()
    //cy.get('._1gCtg').each(($el,index,$list) => {
    cy.get('._1gCtg').each(($el) => {
      var dateName = $el.text()
      if(dateName=='1') {
        cy.wrap($el).click()
      } 
    })

    cy.get('input[placeholder="Enter a number"]').click().type('10')
    cy.get('input[value="Manual Testing"]').click()
    cy.get('input[value="API Testing"]').click()
    cy.get('input[value="Automated Testing"]').click()
    
    cy.get('label[id="comp-l46hciac1"] ._3ESMu').click()
    cy.get('._2UgQw ._1fbEI ._1Qjd7').click()
    cy.get('#comp-l46hciag3 .font_8 .color_15').should('be.visible')
  })

  it('should successfully submit the form without filling-up the Phone and the Expected Salary fields', () => {
    cy.get('input#input_comp-l46hci9f1').clear().type('Adonis B. Geraldez')
    cy.get('input[placeholder="Enter your email"]').clear().type('dongeraldez@gmail.com')
    cy.get('select#collection_comp-l46hci9n').select('SQAE')

    cy.get('div[class="TUQC6"]').click()
    cy.get('button[data-testid="nextMonth"]').click().click()
    //cy.get('._1gCtg').each(($el,index,$list) => {
    cy.get('._1gCtg').each(($el) => {
      var dateName = $el.text()
      if(dateName=='1') {
        cy.wrap($el).click()
      } 
    })

    cy.get('input[value="> 5 Years"]').click({force: true})
    cy.get('input[value="Manual Testing"]').click()
    cy.get('input[value="API Testing"]').click()
    cy.get('input[value="Automated Testing"]').click()
    
    cy.get('label[id="comp-l46hciac1"] ._3ESMu').click()
    cy.get('._2UgQw ._1fbEI ._1Qjd7').click()
    cy.get('#comp-l46hciag3 .font_8 .color_15').should('be.visible')
  })

  it('should successfully submit the form without filling-up the Phone and the Years of Experience fields', () => {
    cy.get('input#input_comp-l46hci9f1').clear().type('Adonis B. Geraldez')
    cy.get('input[placeholder="Enter your email"]').clear().type('dongeraldez@gmail.com')
    cy.get('select#collection_comp-l46hci9n').select('SQAE')

    cy.get('div[class="TUQC6"]').click()
    cy.get('button[data-testid="nextMonth"]').click().click()
    //cy.get('._1gCtg').each(($el,index,$list) => {
    cy.get('._1gCtg').each(($el) => {
      var dateName = $el.text()
      if(dateName=='1') {
        cy.wrap($el).click()
      } 
    })

    cy.get('input[placeholder="Enter a number"]').click().type('10')
    cy.get('input[value="Manual Testing"]').click()
    cy.get('input[value="API Testing"]').click()
    cy.get('input[value="Automated Testing"]').click()
    
    cy.get('label[id="comp-l46hciac1"] ._3ESMu').click()
    cy.get('._2UgQw ._1fbEI ._1Qjd7').click()
    cy.get('#comp-l46hciag3 .font_8 .color_15').should('be.visible')
  })

  it('should successfully submit the form without filling-up the Expected Salary and the Years of Experience fields', () => {
    cy.get('input#input_comp-l46hci9f1').clear().type('Adonis B. Geraldez')
    cy.get('input[placeholder="Enter your email"]').clear().type('dongeraldez@gmail.com')
    cy.get('select#collection_comp-l46hci9n').select('SQAE')
    cy.get('input[placeholder="Enter your phone number"]').type('+63(0)9273837843')

    cy.get('div[class="TUQC6"]').click()
    cy.get('button[data-testid="nextMonth"]').click().click()
    //cy.get('._1gCtg').each(($el,index,$list) => {
    cy.get('._1gCtg').each(($el) => {
      var dateName = $el.text()
      if(dateName=='1') {
        cy.wrap($el).click()
      } 
    })

    cy.get('input[value="Manual Testing"]').click()
    cy.get('input[value="API Testing"]').click()
    cy.get('input[value="Automated Testing"]').click()
    
    cy.get('label[id="comp-l46hciac1"] ._3ESMu').click()
    cy.get('._2UgQw ._1fbEI ._1Qjd7').click()
    cy.get('#comp-l46hciag3 .font_8 .color_15').should('be.visible')
  })

  it('should successfully submit the form without filling-up the Phone, Expected Salary and the Years of Experience fields', () => {
    cy.get('input#input_comp-l46hci9f1').clear().type('Adonis B. Geraldez')
    cy.get('input[placeholder="Enter your email"]').clear().type('dongeraldez@gmail.com')
    cy.get('select#collection_comp-l46hci9n').select('SQAE')

    cy.get('div[class="TUQC6"]').click()
    cy.get('button[data-testid="nextMonth"]').click().click()
    //cy.get('._1gCtg').each(($el,index,$list) => {
    cy.get('._1gCtg').each(($el) => {
      var dateName = $el.text()
      if(dateName=='1') {
        cy.wrap($el).click()
      } 
    })

    cy.get('input[value="Manual Testing"]').click()
    cy.get('input[value="API Testing"]').click()
    cy.get('input[value="Automated Testing"]').click()
    
    cy.get('label[id="comp-l46hciac1"] ._3ESMu').click()
    cy.get('._2UgQw ._1fbEI ._1Qjd7').click()
    cy.get('#comp-l46hciag3 .font_8 .color_15').should('be.visible')
  })

})
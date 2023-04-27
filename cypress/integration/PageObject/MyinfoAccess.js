class LoginPage {
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com')
    }
  
    login(username, password) {
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
      cy.get('.oxd-button').click();
    }
  }
  
  class MyInfoPage {
    navigateToMyInfoPage() {
      cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()
    }
  
    verifyMyInfoPage() {
      cy.url().should('include', '/viewPersonalDetails')
      cy.url().should('include', '/empNumber/')
      cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('be.visible')
    }
  }
  
  export const loginPage = new LoginPage();
  export const myInfoPage = new MyInfoPage();
  
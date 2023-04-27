class SystemUsersPage {
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.url().should('include', '/dashboard');
    }
  
    navigateToUsers() {
      cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
      cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click()
      cy.get('.oxd-topbar-body-nav-tab-link').click()
    }
  
    getListOfSystemUsers() {
      cy.get('.orangehrm-container').should('be.visible')
    }
  }
  
  export default new SystemUsersPage()


  
  
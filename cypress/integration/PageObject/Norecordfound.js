class UserSearchPage {
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.url().should('include', '/dashboard');
    }
  
    goToUserManagement() {
      cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
      cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click()
      cy.get('.oxd-topbar-body-nav-tab-link').click()
    }
  
    searchUser(keyword) {
      cy.get(':nth-child(2) > .oxd-input').type(keyword)
      cy.get('button[type="submit"]').click({ force: true })
    }
  
    getNoRecordsFoundErrorMessage() {
      return cy.get('.orangehrm-horizontal-padding > .oxd-text')
        .should('be.visible')
        .contains('No Records Found')
    }
  }
  
  export default UserSearchPage
  
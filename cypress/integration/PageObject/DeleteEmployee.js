class DeleteEmployeePage {
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
    }
  
    login(username, password) {
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
      cy.get('.oxd-button').click()
    }
  
    navigateToUsers() {
      cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
      cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click()
      cy.get('.oxd-topbar-body-nav-tab-link').click()
    }
  
    searchUser(keyword) {
      cy.get(':nth-child(2) > .oxd-input').type(keyword)
      cy.get('button[type="submit"]').click({ force: true })
    }
  
    deleteUser() {
      cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').first().click()
      cy.get('.oxd-sheet').should('be.visible')
      cy.get('.oxd-button--label-danger').click()
    }
  
    verifySuccessMessage() {
      cy.contains('Success').should('be.visible')
    }
  }
  
  export default new DeleteEmployeePage()
  
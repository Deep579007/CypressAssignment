class EditSystemUserPage {
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.url().should('include', '/dashboard');
    }
  
    clickAdminTab() {
      cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    }
  
    clickUserManagementDropdown() {
      cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click()
    }
  
    clickUsersOption() {
      cy.get('.oxd-topbar-body-nav-tab-link').click()
    }
  
    searchForSystemUser(keyword) {
      cy.get(':nth-child(2) > .oxd-input').type(keyword)
      cy.get('button[type="submit"]').click({ force: true })
    }
  
    clickEditButton() {
      cy.get('.oxd-table-cell-actions > :nth-child(2)').first().click()
    }
  
    selectUserRole(userRole) {
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get(`.oxd-select-dropdown > :nth-child(${userRole})`).click()
    }
  
    selectUserStatus(userStatus) {
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get(`.oxd-select-dropdown > :nth-child(${userStatus})`).click()
    }
  
    clickSaveButton() {
      cy.get('.oxd-button--secondary').click({ force: true })
    }
  }
  
  export default EditSystemUserPage;
  
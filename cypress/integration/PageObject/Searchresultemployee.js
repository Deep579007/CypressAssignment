class SearchUsersPage {
    constructor() {
      // Visit the URL and log in as an admin
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.url().should('include', '/dashboard');
    }
  
    clickAdminTab() {
      // Click on the Admin tab
      cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    }
  
    clickUserManagementDropdown() {
      // Click on the User Management dropdown menu
      cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click()
    }
  
    clickUsersOption() {
      // Click on the Users option
      cy.get('.oxd-topbar-body-nav-tab-link').click()
    }
  
    searchForUser(keyword) {
      // Enter a valid keyword in the search field and click on the Search button
      cy.get(':nth-child(2) > .oxd-input').type(keyword)
      cy.get('button[type="submit"]').click({force: true})
    }
  
    verifySearchResults(keyword) {
      // Check the search results
      cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').should('be.visible')
        .contains(keyword)
    }
  }
  
  export default SearchUsersPage;
  
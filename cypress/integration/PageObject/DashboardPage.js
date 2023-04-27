class DashboardPage {
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
      cy.get('.oxd-button').click();
      cy.url().should('include', '/dashboard');
    }
  
    verifyDashboardPage() {
      cy.title().should('eq', 'OrangeHRM');
    }
  
    // verifyUsernameDisplayed() {
    //   cy.get('.oxd-userdropdown-name').should('contain', 'Selenium Testing');
    // }
  
    verifyDashboardWidgets() {
      cy.contains('Time at Work').should('be.visible');
      cy.contains('My Actions').should('be.visible');
      cy.contains('Quick Launch').should('be.visible');
      cy.contains('Buzz Latest Posts').should('be.visible');
      cy.contains('Employees on Leave Today').should('be.visible');
      cy.contains('Employee Distribution by Sub Unit').should('be.visible');
      cy.contains('Employee Distribution by Location').should('be.visible');
    }
  }
  
  export default DashboardPage;
  
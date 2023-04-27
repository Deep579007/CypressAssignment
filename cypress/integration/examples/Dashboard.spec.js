import DashboardPage from '../PageObject/DashboardPage';

describe('Dashboard Functionality', function() {
  const dashboardPage = new DashboardPage();

  beforeEach(function() {
    dashboardPage.visit();
  });
  
  it('Verify Dashboard Page', function() {
    dashboardPage.verifyDashboardPage();
  });
  
//   it('Verify user name display', function() {
//     dashboardPage.verifyUsernameDisplayed();
//   });
  
  it('Verify the dashboard widgets are visible and readable', function() {
    dashboardPage.verifyDashboardWidgets();
  });
});





//Roughcode
// Dashboard
// describe('Dashboard Functionality', function() {
//   beforeEach(function() {
//   cy.visit('https://opensource-demo.orangehrmlive.com/');
//   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
//   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
//   cy.get('.oxd-button').click();
//   cy.url().should('include', '/dashboard');
//   });
  
//   it('Verify Dashboard Page', function() {
//   cy.title().should('eq', 'OrangeHRM');
//   });
  
//   it('Verify user name display', function() {
//     cy.get('.oxd-userdropdown-name').should('contain', 'Selenium Testing');
//   });
  
//   it('Verify the dashboard widgets are visible and readable', function() {
//   cy.contains('Time at Work').should('be.visible');
//   cy.contains('My Actions').should('be.visible');
//   cy.contains('Quick Launch').should('be.visible');
//   cy.contains('Buzz Latest Posts').should('be.visible');
//   cy.contains('Employees on Leave Today').should('be.visible');
//   cy.contains('Employee Distribution by Sub Unit').should('be.visible');
//   cy.contains('Employee Distribution by Location').should('be.visible');
//   });
//   });
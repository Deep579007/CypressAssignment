import { loginPage, myInfoPage } from '../PageObject/MyinfoAccess';

describe('MyInfo Page Test', () => {
  it('Accesses MyInfo page', () => {
    // Visit the login page
    loginPage.visit();
    
    // Login
    loginPage.login('Admin', 'admin123');
    cy.url().should('include', '/dashboard');
    
    // Navigate to MyInfo page
    myInfoPage.navigateToMyInfoPage();

    // Verify that the user is directed to the MyInfo page
    myInfoPage.verifyMyInfoPage();
  })
})

  
describe('View Personal Details Test', () => {
    it('Verifies that the user can view personal details on the MyInfo page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
      // Enter username and password
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
      cy.get('.oxd-button').click();
      cy.url().should('include', '/dashboard');

      // Navigate to the MyInfo page
      //cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click()
      cy.get('.oxd-sidepanel-body').contains('My Info').click();
  
      // Verify that the user is directed to the MyInfo page
      cy.url().should('include', '/viewPersonalDetails')
      cy.url().should('include', '/empNumber/')
  
  
      // Verify that the user can see their personal details
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').should('be.visible')
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').should('be.visible')
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').should('be.visible')
      cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
      cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
      cy.get(':nth-child(3) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
  
  
      // Click on the Save button
      cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
  
      // Verify that the user can view their personal details
      cy.url().should('include', '/pim/viewPersonalDetails/empNumber/')
    })
  })

describe('Edit Personal Details Test', () => {
    it('Edits personal details successfully', () => {
      // Login to the system and navigate to the personal details page
      cy.visit('https://opensource-demo.orangehrmlive.com')
//       // Enter username and password
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
      cy.get('.oxd-button').click();
      cy.url().should('include', '/dashboard');

      // Navigate to the MyInfo page
      cy.get('.oxd-sidepanel-body').contains('My Info').click();
  
      // Change the personal details
      cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Dapzz')
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('123456789')
  
      // Save the changes
      cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
  
      // Verify that the changes are saved successfully
      cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', 'Dapzz')
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', '123456789')
    })
  })


describe('Personal Details Test', () => {
    it('Verifies that mandatory fields cannot be left blank', () => {
      // Login to the system and navigate to the personal details page
      cy.visit('https://opensource-demo.orangehrmlive.com')
//       // Enter username and password
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
      cy.get('.oxd-button').click();
      cy.url().should('include', '/dashboard');

      // Navigate to the MyInfo page
      cy.get('.oxd-sidepanel-body').contains('My Info').click();
      
      // Clear the first name field and click on the save button
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear()
      cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
  
      // Verify that the first name field has a red border with a required message
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').should('have.css', 'border-color', 'rgb(235, 9, 16)')
      cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').should('contain', 'Required')

  

    })
  })


  
  
  
  
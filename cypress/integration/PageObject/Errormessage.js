class AddUserPage {
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

    clickAddButton() {
        cy.get('.orangehrm-header-container > .oxd-button').click()
    }

    selectUserRole() {
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    }

    enterEmployeeName(employeeName) {
        cy.get('.oxd-autocomplete-text-input > input').type(employeeName)
    }

    selectStatus() {
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    }

    enterUsername(username) {
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
    }

    enterPassword(password) {
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
    }

    clickSaveButton() {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
    }

    validateErrorMessage(errorMessage) {
        cy.get('.oxd-input-group > .oxd-text').should('have.text', errorMessage)
    }
}

export default AddUserPage;

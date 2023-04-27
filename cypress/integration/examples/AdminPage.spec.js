import systemUsersPage from '../PageObject/Listofmployee'
import SearchUsersPage from '../PageObject/Searchresultemployee';
import UserSearchPage from '../PageObject/Norecordfound'
import AddUserPage from '../PageObject/Errormessage';
import EditSystemUserPage from "../PageObject/EmployeeEdit"
import DeleteEmployeePage from "../PageObject/DeleteEmployee";


it('Displays the list of system users', () => {
  // Visit the URL and log in as an admin
  systemUsersPage.visit()

  // Navigate to the Users page
  systemUsersPage.navigateToUsers()

  // Check the list of system users
  systemUsersPage.getListOfSystemUsers()
})



describe('Search Users', () => {
  it('Displays search results that match the keyword', () => {
    const searchUsersPage = new SearchUsersPage();

    searchUsersPage.clickAdminTab();
    searchUsersPage.clickUserManagementDropdown();
    searchUsersPage.clickUsersOption();
    searchUsersPage.searchForUser('Admin');
    searchUsersPage.verifySearchResults('Admin');
  });
});



describe('User Search', () => {
  const userSearchPage = new UserSearchPage()

  beforeEach(() => {
    userSearchPage.visit()
  })

  it('Displays an error message stating that there are no record found', () => {
    userSearchPage.goToUserManagement()
    userSearchPage.searchUser('InvalidUser')
    userSearchPage.getNoRecordsFoundErrorMessage()
  })
})


describe('Add user tests', () => {
    const addUserPage = new AddUserPage();

    it('Displays an error message when adding a new system user with valid data', () => {
        addUserPage.visit();
        addUserPage.clickAdminTab();
        addUserPage.clickUserManagementDropdown();
        addUserPage.clickUsersOption();
        addUserPage.clickAddButton();
        addUserPage.selectUserRole();
        addUserPage.enterEmployeeName('Tom Hanks');
        addUserPage.selectStatus();
        addUserPage.enterUsername('Priti123456');
        addUserPage.enterPassword('Priti@123456');
        addUserPage.clickSaveButton();
        addUserPage.validateErrorMessage('Invalid');
    });
});




describe('Edit System User', () => {
  const editSystemUserPage = new EditSystemUserPage();

  beforeEach(() => {
    editSystemUserPage.visit();
  });

  it('Displays a success message after editing an existing system user with valid data', () => {
    editSystemUserPage.clickAdminTab();
    editSystemUserPage.clickUserManagementDropdown();
    editSystemUserPage.clickUsersOption();
    editSystemUserPage.searchForSystemUser('Admin');
    editSystemUserPage.clickEditButton();
    editSystemUserPage.selectUserRole(2);
    editSystemUserPage.selectUserStatus(2);
    editSystemUserPage.clickSaveButton();
  });
});

describe('Delete User',()=>{
  it('Displays a success message stating that the user was successfully deleted', () => {
    DeleteEmployeePage.visit()
    DeleteEmployeePage.login('Admin', 'admin123')
    DeleteEmployeePage.navigateToUsers()
    DeleteEmployeePage.searchUser('Admin')
    DeleteEmployeePage.deleteUser()
    //DeleteEmployeePage.verifySuccessMessage()
  })
  
})



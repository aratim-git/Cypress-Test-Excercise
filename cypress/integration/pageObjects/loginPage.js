export default {
    login : login,
    navigateToLoginPage : navigateToLoginPage,
};

let loginPageControls = {
    loginLink : '#login2',
    loginModal: '#logInModal',
    loginHeader : '#logInModalLabel',
    loginButton : '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary',
    usernameTextBox :'#loginusername',
    passwordTextBox :'#loginpassword',  
    nameOfUser : '#nameofuser',  
};

//Navigate to Login modal and verify Login modal
function navigateToLoginPage(){
    cy.get(loginPageControls.loginLink).click();

    //Verify login modal is displayed
    cy.get(loginPageControls.loginModal, { timeout: 2000 })
    .should('be.visible');

    //Verify login modal header
    cy.get(loginPageControls.loginHeader).contains('Log in');
}

//Perform Log in operation
function login(username, password){
    //Enter Username, Password and click on the login button
    cy.get(loginPageControls.usernameTextBox).clear().type(username);
    cy.get(loginPageControls.passwordTextBox).clear().type(password);
    cy.get(loginPageControls.loginButton).click();

    //Verify username displayed for loggen in user
    cy.get(loginPageControls.nameOfUser, { timeout: 2000 })
    .should('be.visible').and('contain', 'Welcome ' + username);
}
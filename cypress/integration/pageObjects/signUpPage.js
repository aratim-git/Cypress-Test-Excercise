export default {
    signUp : signUp,
    navigateToSignUpPage : navigateToSignUpPage,
};

let signUpPageControls = {
    signUpLink : '#signin2',
    signUpModal: '#signInModal',
    signUpHeader : '#signInModalLabel',
    signUpButton : '#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary',
    usernameTextBox :'#sign-username',
    passwordTextBox :'#sign-password',        
};

//Navigate to sign up modal and verify sign up modal
function navigateToSignUpPage(){
   cy.get(signUpPageControls.signUpLink).click();

   ////Verify Sign up modal is displayed
   cy.get(signUpPageControls.signUpModal, { timeout: 2000 })
   .should('be.visible');

   //Verify Sign up modal header
   cy.get(signUpPageControls.signUpHeader).contains('Sign up');
}

//Perform Sign Up
function signUp(username, password){
    //Enter Username, Password and click on the Sign up button
    cy.get(signUpPageControls.usernameTextBox).clear().type(username);
    cy.get(signUpPageControls.passwordTextBox).clear().type(password);
    cy.get(signUpPageControls.signUpButton).click(); 
}
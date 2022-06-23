class everNotePage{

loginButton(){return cy.contains('Log In')}
usernameField(){ return cy.get("#username");}
continueButton(){return cy.get('#loginButton')}
passwordField(){return cy.get('#password')}
signInButton(){ return cy.get('.Btn')}
incorrectPasswordError(){return cy.get('div#password-wrapper div.error-status')}
createNoteDropdown(){return cy.get('#qa-CREATE_NOTE ')}
createNoteText(){return cy.contains('Note')}
noteTittle(){return cy.get('div .P0rnC')}
noteTextArea(){return cy.get('.ProseMirror')}
homeIcon(){return cy.get('#qa-NAV_HOME')}
profileDRopdown(){return cy.get('.mjp8WyYQODySClV2byHt:nth-child(1)')}
signoutButton(){return cy.contains('Sign out Rekha manappagol')}
signoutPopUp(){return cy.get('#qa-LOGOUT_CONFIRM_DIALOG_SUBMIT')}
signoutSuccessfulMsg(){return cy.get('.logout-content')}
}

export default everNotePage; 

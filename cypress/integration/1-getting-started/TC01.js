/// <reference types = "Cypress"/>
///<reference types="cypress-iframe"/>
import'cypress-iframe';
import everNotePage from "../../support/PageObjects/everNotePage.js"
var evernotePage = new everNotePage();
describe('Verify the login functionality',()=>{
    before(function(){
        cy.fixture("TC_01").then(function(data){
            globalThis.data = data;
            cy.viewport(1280, 720)          
        })
    })
    beforeEach(()=>{
        cy.viewport(1280, 720)
        cy.visit(data.url1);
    })
xit('launch the url and enter the valid email and incoorect password and click on',()=>{
    evernotePage.loginButton().click();
    cy.login("rmanappagol@gmail.com","test1234")
    expect(evernotePage.incorrectPasswordError().should('have.text',"Incorrect password. You modified your password in the past 24 hours."))
    cy.wait(3000);
});
it(' enter valid credential and do successfull login',()=>{
    evernotePage.loginButton().click();
    cy.login("rmanappagol@gmail.com","June@2030")
    cy.wait(8000)
    evernotePage.createNoteDropdown().click();
    evernotePage.createNoteText().click({force:true})
    
    cy.iframe('#qa-COMMON_EDITOR_IFRAME').find('div .dSbRl').type("Test note 2",{force:true});
    cy.iframe('#qa-COMMON_EDITOR_IFRAME').find('.ProseMirror').type("testing12345",{force:true});
    evernotePage.homeIcon().click({force:true})
    evernotePage.profileDRopdown().click({force:true});
    evernotePage.signoutButton().click({force:true})
    evernotePage.signoutPopUp().click();
    evernotePage.signoutSuccessfulMsg().contains("You have logged out of Evernote.")

   });
   it('fetch the text from note',()=>{
    evernotePage.loginButton().click();
    cy.login("rmanappagol@gmail.com","June@2030")
    //cy.get(".VAlFzyu9Zy86JUoxrnoN div.bJ19E_Xfh2OPLfJUi7zT div.Fuix_q8N7ezroVVJ104t div._BtUCGpnc_2s816wP_Is span").invoke('text').should('contains',"Note on cypress")
    cy.get('.VAlFzyu9Zy86JUoxrnoN div.bJ19E_Xfh2OPLfJUi7zT div.Fuix_q8N7ezroVVJ104t div._BtUCGpnc_2s816wP_Is span').each(($e1, index, $list)=>{
        let note = $e1.text();
        cy.log(note)
        if(note.includes("testing12345")){
            expect(note.trim()).to.equal("testing12345")
        }

    })

   })
  
});

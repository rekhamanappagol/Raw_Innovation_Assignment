// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import everNotePage  from "./PageObjects/everNotePage.js";
var evernotePage = new everNotePage();
Cypress.Commands.add('check_palindrome',(str)=>{
    var name1 =  str.split('').reverse().join('');
    var x= false;
    console.log(name1);
    if(str.includes("!@#$%^&*()__+:>?<,./")){
        return x;
    }
     if(name1 === str){ 
         x = true
     }else{
         x = false
     }
     return x
})

Cypress.Commands.add('multiple_Four_Six',(array)=>{
    var array1 =[]
    for (var i = 0; i < array.length; i++) {
        if(array[i]== 0){
         return "0 can not be devided by zero"
        }else if(array[i]%4==0 || array[i]%6 ==0 ){
            array1.push(array[i])
        } 
       
    };
    return array1;


})
Cypress.Commands.add("login", (username,password)=>{
    evernotePage.usernameField().type(username)
    evernotePage.continueButton().click({force:true});
    evernotePage.passwordField().type(password);

   evernotePage.continueButton().then((ele)=>{
       if(ele.is(':visible')){
        evernotePage.continueButton().click({force:true})
       }else{
        evernotePage.loginButton().click({force:true})
       }

   });

})
  Cypress.Commands.add('getIframeBody',()=>{
    // get the document
    return getIframeDocument()
    
    .its('body').should('not.be.undefined')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    .then(cy.wrap)

  })


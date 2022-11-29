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

/// <reference types="Cypress" />

/// <reference types="cypress-xpath" />


// custom command for clicking on link using label
Cypress.Commands.add("clickLink",(label)=>{    // here, clickLabel = name of command
    cy.get("a").contains(label).click() // get all <a> tag then it checks out required link label is available or not
})

//Over write contains()
Cypress.Commands.overwrite("contains",(originalFn, subject, filter, text, options = {})=>{
    // determine if a filter argument was passed
    if(typeof text == "object"){
        options = text
        text = filter
        filter = undefined
    }
    options.matchCase = false     // make case in-casesensetive

    return originalFn(subject,filter,text,options)
})
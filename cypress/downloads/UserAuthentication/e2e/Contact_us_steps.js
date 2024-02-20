/// <reference types = 'cypress' />
import { And } from "@badeball/cypress-cucumber-preprocessor";


And('I type my first name', ()=>{
    cy.get('[class="feedback-input"]').eq(0).type('sarah')
})


When('I type my last name', ()=>{
    cy.get('.feedback-input').eq(1).type("Owusu")
})

When('I type my email address', ()=>{
    cy.get('.feedback-input').eq(2).type('sarah.owusu@aalitech.com')
})

When('I type a comment', ()=>{
    cy.get('.feedback-input').eq(2).type('Hello world')
})

when('I click on the submit button', ()=>{
    cy.get('contact_button').eq(0).click()
})


Then('I should be presented with a successful contact us submission message')

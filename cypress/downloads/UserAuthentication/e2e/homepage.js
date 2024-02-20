/// <reference types = 'cypress' />
import {Given, When} from "@badeball/cypress-cucumber-preprocessor";

Given('I visit the webdriver university college', ()=>{
    const url = 'https://webdriveruniversity.com';
    cy.visit(url);
})

When('I click on the contact us button', ()=>{
    cy.get('#contact-us').invoke('removeAttr', 'target').click()
})
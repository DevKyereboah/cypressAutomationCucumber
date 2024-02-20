import { Given }  from "@badeball/cypress-cucumber-preprocessor";

Given('A user access the AMAP home Page', ()=>{
    const url = "https://amap.amalitech-dev.net/login";
    cy.visit(url)
})
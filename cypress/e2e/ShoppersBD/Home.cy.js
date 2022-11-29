/// <reference types="Cypress" />

describe("Home Spec -- E2E test ", ()=>{

    before("Visit the application", ()=>{

        cy.log("----- Launch URL in browser  -----")
        cy.visit("https://www.shoppersbd.com/")

    })
    it("Check the logo visibility", ()=>{
       cy.url().should("eq","https://www.shoppersbd.com/")  // assertion with url
       cy.get("img[alt='ShoppersBD : Best Online Shopping in Bangladesh']").should("be.visible")  // validation with visibility
       .and("exist")
    })


    it("Check the availability of customer care email address",()=>{
         cy.get(".widget.widget-static-block > span > strong").should("contain","shoppersbd").and("have.text", "support@shoppersbd.com ")
    })

    it("Checks the logo is clickable", ()=>{
        cy.get("img[alt='ShoppersBD : Best Online Shopping in Bangladesh']").click()
        cy.url().should("eq", "https://www.shoppersbd.com/")
        cy.wait(5000)
        cy.title().should("contain","Best Online Shopping in Bangladesh") 
    })

    it("Check the word Newsletter is present or not ", function(){
        cy.get(".newsletter-title").should("have.text", "newsletter")
        cy.wait(2000)
        cy.title().should("not.eq","ShoppersBD")
        cy.wait(2000)
        cy.url().should("include", "bd")
    })

    it("Shoppers_BD is present in footer -- Nagative  ", function(){
       
        cy.get("div[class='footer-address col-sm-12'] address").should("not.contain", "Shoppers_BD")
        cy.wait(2000)
        cy.title().should("contain","ShoppersBD",{timeout: 90000})
        cy.wait(2000)
        cy.url().should("include", "bd")
    })
})
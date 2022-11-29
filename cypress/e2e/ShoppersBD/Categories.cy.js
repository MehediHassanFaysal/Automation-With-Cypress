describe("<---- Categories --->",()=>{

    beforeEach("Visit the website",()=>{
        cy.log("--- Launch URL in browser ---")
        cy.visit("https://www.shoppersbd.com/")
    })

    it("Checks the word 'CATEGORIES' are present as a title of navigation menu",()=>{

        cy.log("--- Assertion with Categories word is present ---")
        cy.get("div[class='menuleftText'] span").should("have.text","Categories")
    })

    it("Identify the number of sub-menu are availabe under Categories",()=>{
        cy.wait(1000)
        cy.log("--- Assertion with number of menu items are available in categories ---")
        cy.get(".em-catalog-navigation.vertical > li").should("have.length", 11)
        
        cy.log("Assertion with page title")
        cy.title().should("eq", "ShoppersBD | Best Online Shopping in Bangladesh : ShoppersBD")
    })

    it("Check the clickability of one of the menu element",()=>{
        cy.wait(1000)
        cy.get(".em-catalog-navigation.vertical > li:nth-child(3) > a:nth-child(2)").click()

        cy.log("--- Assertions")
        cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ol:nth-child(1) > li:nth-child(2) > a:nth-child(1) > span:nth-child(1)").should("have.text","Electronics")

        cy.title().should("eq", "Electronics : ShoppersBD")
        cy.url().should("contain", "electronics")

    })

    it("Check one of the sub-menu item",()=>{
        cy.wait(1000)
        cy.log("--- Clicking on Cameras sub-menu item")
        cy.get(".level0.nav-3.level-top.parent > ul>li:first-child>a").click({force: true})

        cy.log("--- Assertions ---")
        cy.get('ol > :nth-child(3) > a > span').should("have.text","Cameras")
        cy.title().should("eq", "Buy Digital & Instax Camera : Best Price in Bangladesh : ShoppersBD")
    })
})
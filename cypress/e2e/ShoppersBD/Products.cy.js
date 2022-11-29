
describe("<---- Products ---->",()=>{

    beforeEach("Visit the application",()=>{
        cy.log("--- Launch URL in browser  ---")
        cy.visit("https://www.shoppersbd.com/")
    })

    it("Checks the clickablity of -- NEW ARRIVALS link", ()=>{
        cy.clickLink("new arrivals");

        //cy.get('.tabs_control > :nth-child(2) > a').click()  

        cy.get(".product-name > a[title='Multi-Functional Stainless Steel Shelf ']").should("have.text","Multi-Functional Stainless Steel Shelf ")

        cy.get("img[alt='Multi-Functional Stainless Steel Shelf ']").should("be.visible")
    })

    it("Checks the clickability of a particular featured product", ()=>{
        cy.clickLink("featured")
        cy.clickLink("CraftLand 6 Piece Black Photo Frame Set For Wall Decoration CLF701")
        cy.wait(2000)
        cy.title().should("eq","CraftLand 6 Piece Black Photo Frame Set For Wall Decoration CLF701 : ShoppersBD")
        cy.get("div[class='product-name'] h1").contains("CraftLand 6 Piece Black Photo Frame Set For Wall Decoration CLF701")
    })

    it("Featued product contains ADD TO BAG button",()=>{

        cy.get("div[class='widget-tab-home featured_tab_slider'] div[class='widget em-widget-featured-products-grid'] div[class='widget-products csslider horizontal'] div[class='viewport'] ul[class='products-grid even slides'] li[class='item first'] div[class='product-item'] div[class='product-shop'] div[class='f-fix'] div div button[title='Add to Bag'] span span").contains("ADD TO BAG")


        cy.title().should("eq","ShoppersBD | Best Online Shopping in Bangladesh : ShoppersBD")
        cy.wait(2000)
        cy.url().should("eq", "https://www.shoppersbd.com/")
        cy.get("#product-price-6674-widget-new-list").contains("Tk 1,240 ")

    })


    it("Featured product doesn't contain WhiteList",()=>{

        cy.get("div[class='widget-tab-home featured_tab_slider'] div[class='widget em-widget-featured-products-grid'] div[class='widget-products csslider horizontal'] div[class='viewport'] ul[class='products-grid even slides'] li[class='item first'] div[class='product-item'] div[class='product-shop'] div[class='f-fix'] div div button[title='Add to Bag']").should("not.contain","WhiteList")

        cy.log("------ Assertions ------")
        cy.get("#product-price-6674-widget-new-list").contains("Tk 1,240 ")
        cy.get("#old-price-6674-widget-new-list").contains("Tk 1,770 ")
        cy.wait(1000)
        cy.get("div[class='widget-tab-home featured_tab_slider'] div[class='widget em-widget-featured-products-grid'] div[class='widget-products csslider horizontal'] div[class='viewport'] ul[class='products-grid even slides'] li[class='item first'] div[class='product-item'] div[class='product-shop'] div[class='f-fix'] div div button[title='Add to Bag'] span span").contains("ADD TO BAG")


    })

    it("After clicking a featured product, then check  older price are stay in product details",()=>{
        cy.clickLink("featured")
        cy.clickLink("CraftLand 6 Piece Black Photo Frame Set For Wall Decoration CLF701")
        cy.wait(2000)

        cy.log("------ Assertions ------")
        cy.get("div[class='product-name'] h1").contains("CraftLand 6 Piece Black Photo Frame Set For Wall Decoration CLF701")
        cy.get("div[class='short-description'] div[class='std']").should("contain","CraftLand")
        cy.get("p[class='availability in-stock'] span").should("have.text","In stock")
    })

    it("Pass negative value into the QTY input box then click on Add to bag button ", ()=>{
        cy.clickLink("featured")
        cy.clickLink("CraftLand 6 Piece Black Photo Frame Set For Wall Decoration CLF701")
        cy.wait(2000)

        cy.log("------ Clear the older value then insert -2 into QTY input box ------") 
        cy.get("#qty").clear().type("-2")
        cy.log("------ Check quentity box contains -2 ------") 
        cy.get("#qty").should("have.value", "-2")
        cy.wait(1000)

        cy.log("------ Clicking on ADD TO BAG Button ------") 
        cy.get("#product-addtocart-button").click()
        cy.wait(8000)
        cy.log("------ Clicking on ADD TO BAG Button ------")
        cy.get('.amount').click()

        cy.log("--- Assertions ---")
        cy.get("div[class='wrapper_main'] p:nth-child(1)").should("contain","You have no items in your shopping Bag.")
       

    })

    it("Functionality check of increase or plus button of quantity ",()=>{
        cy.clickLink("featured")
        cy.clickLink("CraftLand 6 Piece Black Photo Frame Set For Wall Decoration CLF701")
        cy.wait(2000)       
        cy.log("------ Clicking on Increase button ------") 
        cy.get("button[title='increase']").click()

        cy.log("------ Validations ------") 
        cy.title().should("eq","CraftLand 6 Piece Black Photo Frame Set For Wall Decoration CLF701 : ShoppersBD")
        cy.get("#qty").should("have.value", "2")
 
    })

    it("Functionality check of decrease or minus button of quantity",function(){
        cy.clickLink("featured")
        cy.clickLink("CraftLand 6 Piece Black Photo Frame Set For Wall Decoration CLF701")
        cy.wait(2000)     

        cy.log("------ Clicking on Increase button ------") 
        cy.get("button[title='increase']").click()
        cy.log("------ Validations: matching with title & QTY box contain 2 ------") 
        cy.title().should("eq","CraftLand 6 Piece Black Photo Frame Set For Wall Decoration CLF701 : ShoppersBD")
        cy.get("#qty").should("have.value", "2")

        cy.wait(3000)

        cy.log("------ Clicking on Increase button ------") 
        cy.get("#qty").clear().type("3")
        cy.log("------ Check quentity box contains 3 ------") 
        cy.get("#qty").should("have.value", "3")
        cy.wait(2000)


        cy.log("------ Clicking on Decrease button ------") 
        cy.get("button[title='decrease']").click()
        cy.log("------ Validations: matchig with title & QTY box has remaining 1 ------") 
        cy.title().should("eq","CraftLand 6 Piece Black Photo Frame Set For Wall Decoration CLF701 : ShoppersBD")
        cy.get("#qty").should("have.value", "2")

    })

    it("Checks the clickablity of DELIVERY POLICY Link",()=>{
        cy.clickLink("featured")
        cy.clickLink("CraftLand 6 Piece Black Photo Frame Set For Wall Decoration CLF701")
        cy.wait(2000)   
        
        cy.log("------ Clicking on Delivery policy link ------") 
        cy.get('.tabs_control > :nth-child(2) > a').click()

        cy.log("---- Assertations ----")
        cy.get('.box3 > p').should("contain","✪ Free Home Delivery available for more than 5000 BDT shopping. ")
        cy.title().should("eq","CraftLand 6 Piece Black Photo Frame Set For Wall Decoration CLF701 : ShoppersBD")
        cy.url().should("include","craftland-6-piece-black-photo-frame-set-for-wall-decoration")
          
    })


    it("Fill all the required fields and click on review button",()=>{
        cy.clickLink("featured")
        cy.clickLink("CraftLand 6 Piece Black Photo Frame Set For Wall Decoration CLF701")
        cy.wait(2000)   
        
        cy.log("------ Filling up ------") 
        cy.get("#nickname_field").type("Mr. Honest")
        cy.get("#summary_field").type("Seriously, this product is really attractive")
        cy.get("#review_field").type("Attractive, dashing and useful product")

        cy.log("----- Rating 1 star for Quality ----- ")
        cy.get("#Quality_1").first().check().should("be.checked")
        
        cy.wait(500)
        cy.log("----- Rating 2 star for Service ----- ")
        cy.get("#Service_2").check().should("be.checked")
        cy.wait(500)
        cy.log("----- Rating 3 star for Price ----- ")
        cy.get("#Price_3").last().check().should("be.checked")
        cy.wait(1000)
        cy.log("----- Click on review button ----- ")
        cy.get('.buttons-set > .button > :nth-child(1) > span').click()

        cy.log("---- Assertations ----")
        cy.title().should("eq","CraftLand 6 Piece Black Photo Frame Set For Wall Decoration CLF701 : ShoppersBD")
        cy.get("div[class='product-name'] h1").contains("CraftLand 6 Piece Black Photo Frame Set For Wall Decoration CLF701")
 
    


       
          
    })




})

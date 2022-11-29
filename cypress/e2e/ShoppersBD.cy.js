/// <reference types="Cypress" />

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


describe("<-- Home Spec -- E2E test -->", ()=>{

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




describe("<----- Searching product ----->",()=>{

   
    beforeEach("Launching URL in browser",function(){
        cy.log("---- Visiting WebApplication ----")
        cy.visit("https://www.shoppersbd.com/")
        cy.get("#search").clear().type("tshirt")
    })

    it("Search by product name",()=>{ 
       
        cy.xpath("//span[contains(text(),'Search')]").click()

        cy.log("---- Asssertions ----")
        cy.get(".page-title >h1").contains("Search results for 'tshirt'").end()
        cy.url().should("eq","https://www.shoppersbd.com/catalogsearch/result/?q=tshirt")
        
    })

    it("Count total suggestions when you write something into the search box",()=>{ 
        cy.wait(2000)
        cy.log("---- Total no. of invisible elements in suggestion list ----")
        cy.get("#search_autocomplete>ul>li>span").filter(":visible").should("have.length", 4)
    })

    it("Click on a particular product category from suggestion list when you trying writing a  product name into search box",()=>{ 
        cy.wait(2000)
       // cy.get("#search_autocomplete>ul>li:nth-child(4)>span").filter(":visible").click()

       cy.log("---- show hidden element with invoke ----")
       cy.get("#search_autocomplete > ul > li > span").invoke("show")
        cy.wait(2000)
       cy.log("---- click hidden element ----")
       cy.contains('tshirt').click({force: true})
       cy.wait(1000)
       cy.log("---- Assertions ----")
       cy.title().should("eq","Search results for: 'tshirt' : ShoppersBD")
       cy.get("h1:nth-child(1)").should("contain","tshirt")
       

    })


    it("Checks the 'sorted by dropdown' button functionality after searching product ",()=>{

        cy.log("---- show hidden element with invoke ----")
        cy.get("#search_autocomplete > ul > li >span[class='amount']").invoke("show")
        cy.log("---- click hidden element ----")
        cy.contains('tshirt').click({force:true})

        cy.log("---- Click on 'SHORTED BY' dropdown button ----")
        cy.get('.category-products > :nth-child(1) > .sorter > .sort-by > .toolbar-dropdown > .current').click()

        cy.log("---- Shorted by price----")
        cy.get(".over > li:nth-child(3) > a:nth-child(1)").click({force:true})

        cy.log("---- Assertions ----")
        cy.url().should("eq","https://www.shoppersbd.com/catalogsearch/result/?dir=asc&order=price&q=tshirt")
        cy.get(':nth-child(1) > .product-item > .product-shop > .f-fix > .product-name > a').should("contain","Write Round Neck T-Shirt MG38 Light Green ") 

     })

    it("Set product by ascending or descending order",()=>{ 
        cy.log("---- Click on search button ----")
        cy.xpath("//span[contains(text(),'Search')]").click()

        cy.wait(1000)

        cy.log("---- Clicking on visibility of ascending/descending orderdirection icon ----")
        cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(3)")
       .should("be.visible")

       cy.log("---- Clicking on assending/descending orderdirection icon ----")
       cy.get('.category-products > :nth-child(1) > .sorter > .sort-by > [title="Set Ascending Direction"]').click()
       
       cy.wait(1000)

       cy.log("---- Assertions ----")
       cy.url().should("eq","https://www.shoppersbd.com/catalogsearch/result/?q=tshirt")

    })

    it("Count how many no of products are available in 2 pages after search",()=>{ 
        cy.log("---- Click on search button ----")
        cy.wait(1000)
        cy.xpath("//span[contains(text(),'Search')]").click()
        cy.get(".products-grid.category-products-grid.first.last.odd > li").should("have.length", 20)

    })
})


describe("<----  Shopping Bag ---->", ()=>{

    beforeEach("Visit Website",function(){
        cy.log("---- Launch URL in Browser ----")
        cy.visit("https://www.shoppersbd.com/")
    })

    it("Checks the visibility of shopping bag icon", function(){ 

        cy.log("---- Checking the visibility of shopping bag icon ----")
        cy.get(".icon.cart").should("be.visible")

        cy.log("---- Assertions ----")
        cy.get(".text_cart").should("have.text","Shoping Bag")

    })

    it("Validate the spelling of Cart button label", function(){ 
        cy.wait(1000)
        cy.log("---- Spelling Check ----")
        cy.get(".text_cart").should("eq","Shopping Bag")

    })

    it("Validate the visibility of modal when you keep the mouse cursor over the shopping bag", function(){ 
        cy.wait(1000)
        cy.log("--- Assertaion by without keeping the cursor over shopping bag, modal shouldn't visible ---")
        cy.get("#top_cart").should("not.be.visible")

        cy.log("--- Keeping cursor over shopping bag ---")
        cy.get(".dropdown-cart-content").trigger("mouseover")

        cy.log("--- Assertions ---")
        cy.get(".amount-content").contains("shopping Bag")
      
    })

    it("Check the cart notification after clicking 'ADD TO BAG' button of a paticular product", function(){ 
        cy.wait(1000)
        cy.log("--- Clicking on Add To Bag button of product ---")
        cy.get("div[class='widget-tab-home featured_tab_slider'] div[class='widget em-widget-featured-products-grid'] div[class='widget-products csslider horizontal'] div[class='viewport'] ul[class='products-grid even slides'] li[class='item first'] div[class='product-item'] div[class='product-shop'] div[class='f-fix'] div div button[title='Add to Bag']").click()

        cy.wait(10000)

        cy.log("--- Varifying product added to the cart ---")
        cy.get("a[class='amount']").click()
        cy.get("h2[class='product-name'] a").should("have.text","CraftLand 6 Piece Black Photo Frame Set For Wall Decoration CLF701")

        cy.wait(3000)
        cy.log("--- Back to HomePage ---")
        cy.go("back")

        cy.log("--- Assertions ---")
        cy.url().should("eq", "https://www.shoppersbd.com/")
        cy.get(".info_cart").should("contain"," 1 item - ").and("contain","Tk 1,240")


    })

    it("Checks the clickability of Shopping Bag button", function(){ 
        cy.wait(1000)
        cy.log("--- Clicking on Add To Bag button of product ---")
        cy.get("div[class='widget-tab-home featured_tab_slider'] div[class='widget em-widget-featured-products-grid'] div[class='widget-products csslider horizontal'] div[class='viewport'] ul[class='products-grid even slides'] li[class='item first'] div[class='product-item'] div[class='product-shop'] div[class='f-fix'] div div button[title='Add to Bag']").click()

        cy.wait(10000)

        cy.log("--- Click on Shopping Bag ---")
        cy.get("a[class='amount']").click()

        cy.wait(500)

        cy.log("--- Assertions ---")
        cy.url().should("eq", "https://www.shoppersbd.com/checkout/cart/?___SID=U")
        cy.get("h2[class='product-name'] a").should("have.text","CraftLand 6 Piece Black Photo Frame Set For Wall Decoration CLF701")
        cy.get("tbody tr[class='first last odd'] td:nth-child(4) span:nth-child(1) span:nth-child(1)").should("have.text", "Tk 1,240")
        cy.get("img[alt='CraftLand 6 Piece Black Photo Frame Set For Wall Decoration CLF701'][src='https://www.shoppersbd.com/media/catalog/product/cache/1/thumbnail/105x105/9df78eab33525d08d6e5fb8d27136e95/c/l/clf-701-guide.jpeg']").should("be.visible")


    })

    it("Clickable and redirectable product name", function(){ 
        cy.wait(1000)
        cy.log("--- Clicking on Add To Bag button of product ---")
        cy.get("div[class='widget-tab-home featured_tab_slider'] div[class='widget em-widget-featured-products-grid'] div[class='widget-products csslider horizontal'] div[class='viewport'] ul[class='products-grid even slides'] li[class='item first'] div[class='product-item'] div[class='product-shop'] div[class='f-fix'] div div button[title='Add to Bag']").click()

        cy.wait(10000)

        cy.log("--- Click on Shopping Bag ---")
        cy.get("a[class='amount']").click()

        cy.wait(1000)

        cy.log("--- Click on linkable product name ---")
        cy.get("h2[class='product-name'] a").click()

        cy.log("--- Assertions ---")
        cy.url().should("contain","craftland-6-piece-black-photo-frame-set")
        cy.get("div[class='product-name'] h1").contains("CraftLand 6 Piece Black Photo Frame Set For Wall Decoration CLF701")


    })

    it("Passing value in qty quantity field and click on UPDATE SHOPPING BAG Button", function(){ 
        cy.wait(1000)
        cy.log("--- Clicking on Add To Bag button of product ---")
        cy.get("div[class='widget-tab-home featured_tab_slider'] div[class='widget em-widget-featured-products-grid'] div[class='widget-products csslider horizontal'] div[class='viewport'] ul[class='products-grid even slides'] li[class='item first'] div[class='product-item'] div[class='product-shop'] div[class='f-fix'] div div button[title='Add to Bag']").click()

        cy.wait(10000)

        cy.log("--- Click on Shopping Bag ---")
        cy.get("a[class='amount']").click()

        cy.wait(1000)

        cy.log("--- Updating value in QTY field ---")
        cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > fieldset:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(4) > tr:nth-child(1) > td:nth-child(5) > div:nth-child(1) > input:nth-child(1)").clear().type(3)

        cy.wait(500)

        cy.log("--- Clicking on UPDATE SHOPPING BAG BUTTON ---")
        cy.get("button[title='Update Shopping Bag']").click()

        cy.log("--- Assertions ---")
        cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > fieldset:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(4) > tr:nth-child(1) > td:nth-child(5) > div:nth-child(1) > input:nth-child(1)").should("have.value", 3)
        
        cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > fieldset:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(4) > tr:nth-child(1) > td:nth-child(6) > span:nth-child(1) > span:nth-child(1)").should("have.text","Tk 3,720")


    })

    it("Click the Increase qty button then click on UPDATE SHOPPING BAG button ", function(){
        cy.wait(1000)
        cy.log("--- Add product ---")
        cy.get("div[class='widget-tab-home featured_tab_slider'] div[class='widget em-widget-featured-products-grid'] div[class='widget-products csslider horizontal'] div[class='viewport'] ul[class='products-grid even slides'] li[class='item first'] div[class='product-item'] div[class='product-shop'] div[class='f-fix'] div div button[title='Add to Bag']").click()

        cy.wait(10000)

        cy.log("--- Click on Shopping Bag ---")
        cy.get("a[class='amount']").click()

        cy.wait(1000)

        cy.log("--- Click on Increase qty button ---")
        cy.get("button[title='Increase Qty']").click()

        cy.log("--- Clicking on UPDATE SHOPPING BAG BUTTON ---")
        cy.get("button[title='Update Shopping Bag']").click()

        cy.log("--- Assertions ---")
        cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > fieldset:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(4) > tr:nth-child(1) > td:nth-child(5) > div:nth-child(1) > input:nth-child(1)").should("have.value", 2)
        
        cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > fieldset:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(4) > tr:nth-child(1) > td:nth-child(6) > span:nth-child(1) > span:nth-child(1)").should("have.text","Tk 2,480")

     })

    it("Click the decrease qty button then click on UPDATE SHOPPING BAG button", function(){
        cy.wait(1000)
        cy.log("--- Clicking on Add To Bag button of product ---")
        cy.get("div[class='widget-tab-home featured_tab_slider'] div[class='widget em-widget-featured-products-grid'] div[class='widget-products csslider horizontal'] div[class='viewport'] ul[class='products-grid even slides'] li[class='item first'] div[class='product-item'] div[class='product-shop'] div[class='f-fix'] div div button[title='Add to Bag']").click()

        cy.wait(10000)

        cy.log("--- Click on Shopping Bag ---")
        cy.get("a[class='amount']").click()

        cy.wait(1000)

        cy.log("--- Click on increase qty button ---")
        cy.get("button[title='Increase Qty']").click()

        cy.log("--- Clicking on UPDATE SHOPPING BAG BUTTON ---")
        cy.get("button[title='Update Shopping Bag']").click()

        cy.wait(4000)

        cy.log("--- Click on decrease qty button ---")
        cy.get("button[title='Decrease Qty']").click()

        cy.log("--- Again clicking on UPDATE SHOPPING BAG BUTTON ---")
        cy.get("button[title='Update Shopping Bag']").click()
       
        cy.wait(1000)


        cy.log("--- Assertions ---")
        cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > fieldset:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(4) > tr:nth-child(1) > td:nth-child(5) > div:nth-child(1) > input:nth-child(1)").should("have.value", 1)
        
        cy.get("tbody tr[class='first last odd'] td:nth-child(6) span:nth-child(1) span:nth-child(1)").should("have.text","Tk 1,240")


     })

    it("Remove product from shopping bag", function(){
        cy.wait(1000)
        cy.log("--- Add product int shopping bag---")
        cy.get("div[class='widget-tab-home featured_tab_slider'] div[class='widget em-widget-featured-products-grid'] div[class='widget-products csslider horizontal'] div[class='viewport'] ul[class='products-grid even slides'] li[class='item first'] div[class='product-item'] div[class='product-shop'] div[class='f-fix'] div div button[title='Add to Bag']").click()

        cy.wait(10000)

        cy.log("--- Click on Shopping Bag ---")
        cy.get("a[class='amount']").click()

        cy.wait(1000)

        cy.log("--- Click on remove icon button ---")
        cy.get("a[title='Remove item']").click()

        cy.log("--- Assertions ---")
        cy.get("div[class='page-title'] h1").should("have.text","Shopping Bag is Empty")
        cy.get("div[class='wrapper_main'] p:nth-child(1)").should("have.text","You have no items in your shopping Bag.")

     })

    it("Clickability of CONTINUE SHOPPING BUTTON", function(){ 
        cy.wait(1000)
        cy.log("--- Add product int shopping bag---")
        cy.get("div[class='widget-tab-home featured_tab_slider'] div[class='widget em-widget-featured-products-grid'] div[class='widget-products csslider horizontal'] div[class='viewport'] ul[class='products-grid even slides'] li[class='item first'] div[class='product-item'] div[class='product-shop'] div[class='f-fix'] div div button[title='Add to Bag']").click()

        cy.wait(10000)

        cy.log("--- Click on Shopping Bag ---")
        cy.get("a[class='amount']").click()

        cy.wait(1000)

        cy.log("---  Clicking on Continue shopping ---")
        cy.get('.btn-continue > :nth-child(1) > span').click()

        cy.wait(3000)
       // cy.url().should("eq","https://www.shoppersbd.com/")

    })

    it("Check the clickability of CLEAR SHOPPING BAG BUTTON", function(){ 
        cy.wait(1000)
        cy.log("--- Add product int shopping bag---")
        cy.get("div[class='widget-tab-home featured_tab_slider'] div[class='widget em-widget-featured-products-grid'] div[class='widget-products csslider horizontal'] div[class='viewport'] ul[class='products-grid even slides'] li[class='item first'] div[class='product-item'] div[class='product-shop'] div[class='f-fix'] div div button[title='Add to Bag']").click()

        cy.wait(10000)

        cy.log("--- Click on Shopping Bag ---")
        cy.get("a[class='amount']").click()

        cy.wait(1000)

        cy.log("--- Clear shopping bag ---")
        cy.get("#empty_cart_button").click()

        cy.log("--- Assertions ---")
        cy.get("div[class='page-title'] h1").should("have.text","Shopping Bag is Empty")
        cy.get("div[class='wrapper_main'] p:nth-child(1)").should("have.text","You have no items in your shopping Bag.")
    })

    it("Accessability check of Edit button ", function(){ 
        cy.wait(1000)
        cy.log("--- Add product int shopping bag---")
        cy.get("div[class='widget-tab-home featured_tab_slider'] div[class='widget em-widget-featured-products-grid'] div[class='widget-products csslider horizontal'] div[class='viewport'] ul[class='products-grid even slides'] li[class='item first'] div[class='product-item'] div[class='product-shop'] div[class='f-fix'] div div button[title='Add to Bag']").click()

        cy.wait(10000)

        cy.log("--- Click on Shopping Bag ---")
        cy.get("a[class='amount']").click()

        cy.wait(1000)

        cy.log("--- Click on Edit link ---")
        cy.get("a[title='Edit item parameters']").click()

        cy.log("--- Assertions ---")
        cy.title().should("eq", "CraftLand 6 Piece Black Photo Frame Set For Wall Decoration CLF701 : ShoppersBD")
        cy.get("div[class='short-description'] div[class='std']").contains("CLF701")
    })

    it("Check the order button is clickable or not", function(){ 
        cy.wait(1000)
        cy.log("--- Add product int shopping bag---")
        cy.get("div[class='widget-tab-home featured_tab_slider'] div[class='widget em-widget-featured-products-grid'] div[class='widget-products csslider horizontal'] div[class='viewport'] ul[class='products-grid even slides'] li[class='item first'] div[class='product-item'] div[class='product-shop'] div[class='f-fix'] div div button[title='Add to Bag']").click()

        cy.wait(10000)

        cy.log("--- Click on Shopping Bag ---")
        cy.get("a[class='amount']").click()

        cy.wait(1000)

        cy.log("--- Place an order ---")
        cy.get(".button.btn-proceed-checkout.btn-checkout").click() 

        cy.log("--- Assertions ---")
        

    })
      
})





describe("<--- Regsitration --->", ()=>{

    beforeEach("Visit the website",()=>{
        cy.log("-- Launch URL in browser --")
        cy.visit("https://www.shoppersbd.com/")
        cy.wait(1000)
        cy.log("-- Click on register button --")
        cy.get(".header-top-left >ul>li:nth-child(3)>a").click({force:true})
        cy.wait(1000)
    })

    it("Validate the title of registration page",()=>{
        cy.log("-- Assertion with registration page title --")
        cy.title().should("eq", "Create New Customer Account : ShoppersBD")
    })

    it("Leave all the required fields as blank and click the submit button",()=>{
        cy.log("-- Clicking on Submit button --")
        cy.get('.buttons-set > .button > :nth-child(1) > span').click()

        cy.log("-- Assertions --")
        cy.title().should("eq", "Create New Customer Account : ShoppersBD")
        cy.get("#advice-required-entry-firstname").should("contain","This is a required field.")
        cy.get("#advice-required-entry-lastname").should("contain","This is a required field.")
        cy.get("#advice-required-entry-password").should("contain","This is a required field.")
        cy.get("#advice-required-entry-confirmation").should("contain","This is a required field.")
        // cy.get('.error-msg > ul > :nth-child(1) > span').should("contain",'"First Name" is a required value.')
        // cy.get('.error-msg > ul > :nth-child(2) > span').should("contain",'"First Name" length must be equal or greater than 1 characters.')
        // cy.get('.error-msg > ul > :nth-child(3) > span').should("contain",'"Last Name" is a required value.')
        // cy.get('.error-msg > ul > :nth-child(4) > span').should("contain",'"Last Name" length must be equal or greater than 1 characters.')
        // cy.get('.error-msg > ul > :nth-child(5) > span').should("contain",'"Email" is a required value.')
    })

    it("DataDrivenTest Part-1 -----Registration",()=>{

        cy.fixture("registrationDetails.json").then((data)=>{

            data.forEach((user_data)=>{
                cy.get("#firstname").clear().type(user_data.FirstName)
                cy.get("#lastname").clear().type(user_data.LastName)
                cy.get("#email_address").clear().type(user_data.Email)
                cy.get("#password").clear().type(user_data.Password)
                cy.get("#confirmation").clear().type(user_data.ConfirmPassward)

                cy.wait(1000)

                cy.get('.buttons-set > .button > :nth-child(1) > span').click()

                cy.wait(2000)

                if(user_data.FirstName == "Faysal" && user_data.LastName == "Sarder" && user_data.Email == "faysal@gmail.com" && user_data.Password == "1a1" && user_data.ConfirmPassward == "1a1")
                {
                    cy.log("-- Set 3 alpha-numeric character in password and confirm password field then click on submit --")
                    //cy.get('.success-msg > ul > li > span').should("have.text",user_data.Expected)
                    //cy.get('.error-msg > ul > li > span').should("contain", "The minimum password length is 6")
                    // cy.get('#advice-validate-password-password').should("contain", "Please enter 6 or more characters. Leading or trailing spaces will be ignored.")
                    cy.contains("#advice-validate-password-password",user_data.Expected)
                    cy.title().should("eq", "Create New Customer Account : ShoppersBD")

                    cy.wait(3000)
                }
                else if(user_data.FirstName == "123" && user_data.LastName == "123" && user_data.Email == "001@001.com" && user_data.Password == "123456" && user_data.ConfirmPassward == "1234567")
                {
                    cy.log("-- Try to register with existing registered email address --")
                    cy.get('#advice-validate-cpassword-confirmation').should("have.text",user_data.Expected)
                    //cy.contains(".error-msg > ul > li > span","Please make sure your passwords match.")
                    cy.title().should("eq", "Create New Customer Account : ShoppersBD")
                }
                else 
                {
                    cy.log("-- Try to register with existing registered email address --")
                    //cy.get('.success-msg > ul > li > span').should("have.text",user_data.Expected)

                    cy.contains(".error-msg > ul > li > span","There is already an account with this email address.")
                    cy.title().should("eq", "Create New Customer Account : ShoppersBD")
                }

            })

           
        })
    })


     it("Try to register with FirstName, LastName as numbers, Invalid email address and 6 digits password",()=>{
        cy.get("#firstname").clear().type("123")
        cy.get("#lastname").clear().type("123")
        cy.get("#email_address").clear().type("*_12@12123.com")
        cy.get("#password").clear().type("012345")
        cy.get("#confirmation").clear().type("012345")
        cy.wait(1000)

        cy.get('.buttons-set > .button > :nth-child(1) > span').click()

        cy.wait(1000)

        cy.log("-- Assertions --")
        cy.get('.success-msg > ul > li > span').should("have.text","Thank you for registering with ShoppersBD.com.")
        cy.title().should("eq", "Create New Customer Account : ShoppersBD")
     })


     it("Try to register with FirstName, LastName as special characters, Invalid email address and 6 digits password",()=>{
        cy.get("#firstname").clear().type("@@@")
        cy.get("#lastname").clear().type("###")
        cy.get("#email_address").clear().type("|_12@123123.com")
        cy.get("#password").clear().type("000000")
        cy.get("#confirmation").clear().type("000000")
        cy.wait(1000)

        cy.get('.buttons-set > .button > :nth-child(1) > span').click()

        cy.wait(1000)

        cy.log("-- Assertions --")
        cy.get('.success-msg > ul > li > span').should("have.text","Thank you for registering with ShoppersBD.com.")
        cy.title().should("eq", "Create New Customer Account : ShoppersBD")
     })

     it("Try to register with invalid Username , Invalid email address and 6 digits password",()=>{
        cy.get("#firstname").clear().type("------")
        cy.get("#lastname").clear().type("------")
        cy.get("#email_address").clear().type("|123@00123.com")
        cy.get("#password").clear().type("010101")
        cy.get("#confirmation").clear().type("010101")
        cy.wait(1000)

        cy.get('.buttons-set > .button > :nth-child(1) > span').click()

        cy.wait(1000)

        cy.log("-- Assertions --")
        cy.get('.success-msg > ul > li > span').should("have.text","Thank you for registering with ShoppersBD.com.")
        cy.title().should("eq", "Create New Customer Account : ShoppersBD")
     })


})


describe("<--- Login --->",()=>{

    beforeEach("Visit the Website",()=>{
        cy.log("--- Launch URL in browser ---")
        cy.visit("https://www.shoppersbd.com/")
        cy.wait(1000)   // i sec
        cy.log("--- Clicking on signin ---")
        cy.xpath("//a[@title='Log In']").click()

    })
    it("Validate the title of login page",()=>{
        cy.log("--- Validate the loginPage title ---")
        cy.title().should("eq", "Customer Login : ShoppersBD")
        cy.url().should("contain","customer/account/login/")
    })

    it("Leave email address and password fields as blank and click the Login button",()=>{
        cy.log("--- Keeping email and password fields as blank ---")
        cy.xpath("//button[@id='send2']//span//span[contains(text(),'Login')]").click()

        cy.log("--- Assertions ---")
        cy.get('.error-msg > ul > li > span').should("have.text", "Login and password are required.")
        cy.title().should("eq", "Customer Login : ShoppersBD")
    })

    it("Try to login with empty email address with 2 numeric password",()=>{
        cy.log("--- Keeping email field as blank ---")

        cy.log("--- Enter 2 digits in the password field ---")
        cy.get('#pass').clear().type("12")
        cy.log("--- Clicking on login button ---")
        cy.xpath("//button[@id='send2']//span//span[contains(text(),'Login')]").click()

        cy.log("--- Assertions ---")
       // cy.get('.error-msg > ul > li > span').should("have.text", "Login and password are required.")
       cy.get("#advice-validate-password-pass").should("have.text","Please enter 6 or more characters. Leading or trailing spaces will be ignored.")
       cy.title().should("eq", "Customer Login : ShoppersBD")
    })

    it("DataDrivenTest--Login",()=>{
        
        cy.fixture("login.json").then((data)=>{

            data.forEach((info)=>{
                cy.log("-- Putting email addess --")
                cy.get("#email").clear().type(info.email)

                cy.log("-- Putting password addess --")
                cy.get("#pass").clear().type(info.password)

                cy.wait(1000)

                cy.log("--- Clicking on login button ---")
                cy.xpath("//button[@id='send2']//span//span[contains(text(),'Login')]").click()

                if(info.email == "123@123.com" && info.password == "123321"){
                    cy.log("-- Filled out invalid email and password and click enter --")
                    cy.log("-- Assert by required alert --")
                    cy.contains(".error-msg > ul > li > span",info.expected)
                    cy.log("-- Assert by URL --")
                    cy.url().should("contain",info.url_path)
                }else{
                    cy.log("-- Login with valid credentials --")
                    cy.log("-- Assertion with My Dashboard in My Account --")
                    cy.get('h1').should("contain",info.dashboard)
                    cy.log("-- Assert by URL --")
                    cy.url().should("contain", info.url)
                    cy.log("-- Assertion with user email address --")
                    cy.get('.col-1 > .box > .box-content > p').should("contain", info.user_email)

                    cy.log("-- Logout --")
                    cy.get('.links > :nth-child(3) > a').click()

                    cy.log("-- Validation after logout --")
                    cy.get('.em_col_content > p').should("have.text", info.logout_validation)
                }

            })

        })
    })


})

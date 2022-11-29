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

    it.only("Check the order button is clickable or not", function(){ 
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


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
       cy.contains('tshirt').click()
       cy.wait(1000)
       cy.log("---- Assertions ----")
       cy.title().should("eq","Search results for: 'tshirt' : ShoppersBD")
       cy.get("h1:nth-child(1)").should("contain","tshirt")
       

    })


    it.only("Checks the 'sorted by dropdown' button functionality after searching product ",()=>{

        cy.log("---- show hidden element with invoke ----")
        cy.get("#search_autocomplete > ul > li >span[class='amount']").invoke("show")
        cy.log("---- click hidden element ----")
        cy.contains('tshirt').click()

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
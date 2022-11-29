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

    it.only("Try to login with empty email address with 2 numeric password",()=>{
        cy.log("--- Keeping email field as blank ---")

        cy.log("--- Enter 2 digits in the password field ---")
        cy.get('#pass').clear().type("12")
        cy.log("--- Clicking on login button ---")
        cy.xpath("//button[@id='send2']//span//span[contains(text(),'Login')]").click()

        cy.log("--- Assertions ---")
        //cy.get('.error-msg > ul > li > span').should("have.text", "Login and password are required.")
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
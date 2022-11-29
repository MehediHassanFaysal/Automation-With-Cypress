
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
        cy.get('.error-msg > ul > :nth-child(1) > span').should("contain",'"First Name" is a required value.')
        cy.get('.error-msg > ul > :nth-child(2) > span').should("contain",'"First Name" length must be equal or greater than 1 characters.')
        cy.get('.error-msg > ul > :nth-child(3) > span').should("contain",'"Last Name" is a required value.')
        cy.get('.error-msg > ul > :nth-child(4) > span').should("contain",'"Last Name" length must be equal or greater than 1 characters.')
        cy.get('.error-msg > ul > :nth-child(5) > span').should("contain",'"Email" is a required value.')
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
        cy.get("#email_address").clear().type("*_12@12.com")
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
        cy.get("#email_address").clear().type("|_12@123.com")
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
        cy.get("#email_address").clear().type("|123@00.com")
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
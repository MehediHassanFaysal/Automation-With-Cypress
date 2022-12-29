// page object class

class testingPractice
    {

        // define locators
        searchBox = "#Wikipedia1_wikipedia-search-input"
        searchButton = "input[type='submit']"
        searchRes = "#Wikipedia1_wikipedia-search-results>#wikipedia-search-result-link" 
        clickOn4thOp = "#Wikipedia1_wikipedia-search-results>div:nth-child(4)>a"
        fourthOptionPageTitle = "Python syntax and semantics - Wikipedia"
        fourthOptionPageUrl = "https://en.wikipedia.org/wiki/Python_syntax_and_semantics"
        alertButton = "button[onclick='myFunction()']"
        alertResultOK = "#demo"
        speedField = "#speed"
        spdMedium = "Medium"
        fileDD = "#files"
        fileOp = "PDF file"
        ttlLabels = "#Text1>.widget-content>div>span"
        dblCLickBtn = "button[ondblclick='myFunction1()']"
        dblClickField2 = "#field2"
        simpleDrap = "#draggable"
        simpleDrop = "#droppable"
        waitTime = 3000
        imgDrag = ".ui-widget.ui-helper-clearfix>#gallery>li:first-child"
        imgDrop = "#trash"
        delimgFromTrash = ""
        sliderMove = "#slider>span"
        totalRowsAndColumns = ".widget-content>table>tbody>tr>td"
        parName = ".widget-content>table>tbody>tr:nth-child(5)>td:first-child"
        author = ".widget-content>table>tbody>tr:nth-child(5)>td:nth-child(2)" 

        // methods

        visitWeb(){
            cy.visit("https://testautomationpractice.blogspot.com/", {timeout: 150000})
        }

        sendDataIntoSearchBox(search){
            cy.get(this.searchBox).clear().type(search)
            
        }

        clickSearchButton(){
            cy.get(this.searchButton).click()
        }

        searchResult(){
            cy.get(this.searchRes).should("have.length", 5)
        }

        click4thOption(){
            cy.get(this.clickOn4thOp).invoke("removeAttr","target").click()
        }
        validationWithURL(){
            cy.url().should("contain", this.fourthOptionPageUrl)
        }
        validationWithTitle(){
            cy.title().should("eq", this.fourthOptionPageTitle)
        }

        clickOnAlert(){
            cy.get(this.alertButton).click()

            cy.on("window.confirm", (con_alert_win)=>{
                expect(con_alert_win).to.contains("Press a button!")
            })

            cy.on("window:confirm", ()=> true)

            cy.get(this.alertResultOK).should("have.text", "You pressed OK!")
        }

        clickOnMedium(){
            cy.get(this.speedField).select(this.spdMedium).should("contain", "Medium")
        }

        choosePDF(){
            cy.get(this.fileDD).select(this.fileOp).should("have.value", 2)
        }

        checkTotalLabels(){
            cy.get(this.ttlLabels).should("have.length", 7)
        }

        dblClickOperation(){
            cy.get(this.dblCLickBtn).dblclick()
            cy.get(this.dblClickField2).should("have.value", "Hello World!")
        }

        checkDragAndDrop(){
            cy.wait(this.waitTime)
            cy.get(this.simpleDrap).drag(this.simpleDrop, {force:true}, "Drag element and dropped it the perfect position")
        }

        imageDragAndDrop(){
            cy.get(this.imgDrag).drag(this.imgDrop, {force:true}, "Drag element and dropped it into the perfect position")
            // cy.get("#trash>ul>li>a").should("have.text", "Recycle image")
        }

        RecycleDropImg(){
            cy.get(this.imgDrag).drag(this.imgDrop, {force:true}, "Drag element and dropped it into the perfect position")
            cy.get("#trash>ul>li>a").click()
        }

        sliderChange(){
            cy.get("sliderMove").as("range").invoke("val", 100).trigger("change")
        }

        noOfRowsAndColumns(){
            cy.get(this.totalRowsAndColumns).should("have.length", 24)
        }
        particularBookName(){
            cy.get(this.parName).should("have.text", "Master In Selenium")
        }

        captureBooksByAuthor(){
            cy.get(this.author)
        }

        afterNoon(){
            let iframe = cy.get("#frame-one1434677811")
            .its("0.contentDocument.body")
            .should("be.visible")
            .then(cy.wrap)
    
            iframe.xpath('//*[@id="RESULT_RadioButton-9"]')
            .should("exist")
            .select("Afternoon")
            .should("contain", "Afternoon")
        }


        clickAlltheCheckBox(){
            let iframe = cy.get("#frame-one1434677811")
            .its("0.contentDocument.body")
            .should("be.visible")
            .then(cy.wrap)
    
            iframe.xpath('//*[@id="q15"]/table/tbody/tr[1]/td')
            .should("be.visible")


        }

    }

export default testingPractice
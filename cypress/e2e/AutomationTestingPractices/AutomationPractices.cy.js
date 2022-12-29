import testingPractice from "../../PageObjPattern/helperPageObj.js";
describe("Automation Testing Practices", ()=>{

    // beforeEach("Open the browser", ()=>{
    //     cy.log("Launch URL in browser window");
    //     const testPrac = new testingPractice()
    //     testPrac.visitWeb()
    // })

    it("Count total number of suggestion arrives after writing something in the search box", ()=>{
        const testPrac = new testingPractice()
        testPrac.sendDataIntoSearchBox("python")
        testPrac.clickSearchButton()
        testPrac.searchResult()
    })

    it("After searching click on 4th option from suggention", ()=>{
        const testPrac = new testingPractice()
        testPrac.sendDataIntoSearchBox("python")
        testPrac.clickSearchButton()
        testPrac.click4thOption()
        testPrac.validationWithURL()
        testPrac.validationWithTitle()
    })

    it("Check the JS confirm window", ()=>{
        const testPrac = new testingPractice()
        testPrac.clickOnAlert() 
    })


    it("Dynamically mm/dd/yy capture from date picker", ()=>{
        
    })

    it("Check a option of a speed drop down menu", ()=>{
        const testPrac = new testingPractice()
        testPrac.clickOnMedium() 
        
    })

    it("Check PDF from file drop-down menu", ()=>{
        const testPrac = new testingPractice()
        testPrac.choosePDF() 
        
    })

    it("Verify total number of label belongs to text Labels", ()=>{
        const testPrac = new testingPractice()
        testPrac.checkTotalLabels() 
        
    })

    
    it("Check double click-mouseOperation", ()=>{
        const testPrac = new testingPractice()
        testPrac.dblClickOperation() 
        
    })

    it("Check drap & drop-mouseOperation", ()=>{
        const testPrac = new testingPractice()
        testPrac.checkDragAndDrop()
        
    })

    it("Drap & drop image into Trash-mouseOperation", ()=>{
        const testPrac = new testingPractice()
        testPrac.visitWeb()
        testPrac.imageDragAndDrop()
        
    })

    it("Recycled a dropped image from Trash-mouseOperation", ()=>{
        const testPrac = new testingPractice()
        testPrac.visitWeb()
        testPrac.RecycleDropImg()
        
    })

   

    it("count and verify total number of rows and columns are in HTML table",()=>{
        const testPrac = new testingPractice()
        testPrac.visitWeb()
        testPrac. noOfRowsAndColumns()

    })


    it("Capture a particular BookName from BookName column",()=>{
        const testPrac = new testingPractice()
        testPrac.visitWeb()
        testPrac.particularBookName()
    })


    it("print and verify the BookNames which Author is Mukesh",()=>{
        const testPrac = new testingPractice()
        testPrac.visitWeb()
       
        cy.get(".widget-content>table>tbody>tr>td")
        .then((name)=>{
            if(name.find(".widget-content>table>tbody>tr:nth-child(5)>td:nth-child(2)")){
                //cy.log("Success")
            }else{
               // cy.log("F")
            }
        })


    })


    it("Select and verify afternoon from time to contact dropdown",()=>{
        const testPrac = new testingPractice()
        testPrac.visitWeb()

        testPrac.afterNoon()

    })


    it("Click all days in a week from in checkbox",()=>{
        const testPrac = new testingPractice()
        testPrac.visitWeb()
        testPrac.clickAlltheCheckBox()
    })






})
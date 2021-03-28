describe("drag and drop actions",() =>{

    it("do drag and drop", () => {
        browser.url("https://jqueryui.com/droppable/");
        //browser.maximizeWindow();
        const sourceElement= $('div#draggable');
        const targetElement= $('div#droppable');
       // browser.pause(3000);
        sourceElement.dragAndDrop(targetElement);
        browser.pause(3000);
    })

})
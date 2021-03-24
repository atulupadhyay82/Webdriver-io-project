describe("interacting with another website", function(){

    it("get a text", function(){
        browser.url('https://www.freshworks.com/crm/');
        const label=$('h1');
        let text=label.getText();
        console.log(text);
    })

})
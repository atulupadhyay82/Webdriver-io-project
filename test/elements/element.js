describe("interation with elements", function(){

    it("enter a value in the field", function(){
        browser.url('/');
        const search= $('#twotabsearchtextbox');
        search.setValue('Apple macbook');
        browser.pause(15000);
    }),

    it("get a text", function(){
        browser.url('/');
        const label=$('#nav-xshop>a+a');
        let text=label.getText();
        console.log(text);
    })
})
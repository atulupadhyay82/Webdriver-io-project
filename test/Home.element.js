const homePage= require('../pages/homePage')

describe("Homepage elements handle", function(){
    it("verify home page elements", function(){
       browser.url('https://www.freshworks.com/');
       let text= homePage.pageHeader.getText();
       console.log(text);

       console.log(homePage.subHeading.getText());
       homePage.supportLink.click();
       browser.pause(5000);
    })
})

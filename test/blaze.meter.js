const blazePage= require("../pages/blazemeter")

describe("blaze page element handle",function(){
    it("get text for all main links", function(){
        browser.url('https://www.blazemeter.com/');
         blazePage.getTextForLiNav;
        // blazePage.useCaseElementsText;
        blazePage.specificChildElement(3);
    })

});



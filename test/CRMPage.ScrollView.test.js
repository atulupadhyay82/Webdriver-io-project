const crmPage= require("../pages/CRMPage.Scroll")

describe("Scroll to element",() => {

    it.skip("Should scroll to forget pwd link and click", () => {

        browser.url("https://classic.crmpro.com/");
        browser.maximizeWindow();
        console.log("in view port", crmPage.forgetPWDlink.isDisplayedInViewport());
        crmPage.forgetPWDlink.scrollIntoView();
        console.log("in view port", crmPage.forgetPWDlink.isDisplayedInViewport());
        //browser.pause(4000);
        crmPage.forgetPWDlink.click();
    }),
    it("Should scroll to forget pwd link,move and click", () => {

        browser.url("https://classic.crmpro.com/");
        browser.maximizeWindow();
        console.log("in view port", crmPage.forgetPWDlink.isDisplayedInViewport());
        crmPage.forgetPWDlink.scrollIntoView();
        console.log("in view port", crmPage.forgetPWDlink.isDisplayedInViewport());
        crmPage.moveToElement(crmPage.forgetPWDlink);
        crmPage.forgetPWDlink.click();
    })
})
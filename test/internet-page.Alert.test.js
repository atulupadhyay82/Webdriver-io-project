const { assert } = require("chai");
const alertPage= require("../pages/internet-page.Alerts")

describe("Handling alert pop ups", () => {

    it("accept alert", () => {
        browser.url('https://the-internet.herokuapp.com/javascript_alerts');
        alertPage.clickOnAlertButton(1);
        const alertText= browser.getAlertText();
        console.log(alertText);
        assert.equal("I am a JS Alert",alertText);
        browser.acceptAlert();
        browser.pause(4000);
        const resultText= alertPage.fetchResultText;
        console.log(resultText);
        assert.equal('You successfully clicked an alert',resultText);
        browser.pause(3000);
    }),
    
    it("dismiss alert", () => {
        browser.url('https://the-internet.herokuapp.com/javascript_alerts');
        alertPage.clickOnAlertButton(2);
        browser.dismissAlert();
        browser.pause(4000);
        const resultText= alertPage.fetchResultText;
        console.log(resultText);
        assert.equal('You clicked: Cancel',resultText);
        browser.pause(3000);
    }),
    it("enter text on alert and accept", () => {
        browser.url('https://the-internet.herokuapp.com/javascript_alerts');
        alertPage.clickOnAlertButton(3);
        browser.sendAlertText('this is alert text');
        browser.acceptAlert();
        browser.pause(4000);
        const resultText= alertPage.fetchResultText;
        console.log(resultText);
        assert.equal('You entered: this is alert text',resultText);
        browser.pause(3000);
    })
})
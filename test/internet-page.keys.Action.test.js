const { assert } = require("chai");
const keysAction= require("../pages/internet-page.keys.Action")

/**
 * Send a sequence of key strokes to the active element. You can also use characters like "Left arrow" or "Back space". 
 * WebdriverIO will take care of translating them into unicode characters.
 * You’ll find all supported characters here.
 * https://w3c.github.io/webdriver/#keyboard-actions
 */
describe("Keys action handle",() =>{

    it("Keys Action perform", () =>{
        browser.url('https://the-internet.herokuapp.com/key_presses');
        browser.maximizeWindow();
        keysAction.enterSearch("Tab");
        const text= keysAction.resultLabelText;
        browser.pause(4000);
        assert.equal("You entered: TAB",text);
    })
})
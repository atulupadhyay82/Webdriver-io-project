const { assert } = require("chai");

/**
 * No page I have created for this test
 */
describe("waitUntil method handle", ()=>{

    it("simple wait using browser.pause()", () => {
        
        browser.url("https://app.hubspot.com/login");
        const email=$('#username');
        const password=$('#password');
        const loginBtn= $('#loginBtn');
        browser.pause(10000);
        assert.isTrue(email.isDisplayed(), "Email field is not visible on the UI after 10s");
    }),
    it("wait until", () => {
        
        browser.url("https://app.hubspot.com/login");
        const email=$('#username');
        const password=$('#password');
        const loginBtn= $('#loginBtn');
        browser.waitUntil(
            () => email.isDisplayed() === true,
            {
                timeout: 15000,
                timeoutMsg: 'expected email to be visible after 15s'
            }
        );

        const header= $('h1.private-page_title');
        browser.waitUntil(
            () => email.getText() === 'Sales Dashboard' && browser.getTitle() ==='Report Dashboard',
            {
                timeout: 6000,
                timeoutMsg: 'expected header to be visible after 6s'
            }
        );  
    })
})
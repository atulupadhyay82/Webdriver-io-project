const { assert } = require("chai");

describe("wait for enabled case",() => {

    it("should wait for button to be enabled",() => {
        browser.url("https://classic.crmpro.com/register/");
        const checkbox=$(`input[name='agreeTerms']`);
        const submitBtn= $('#submitButton');
        checkbox.click();
        browser.pause(3000);
        submitBtn.waitForEnabled(3000);
        assert.equal(true,submitBtn.isEnabled());
    }),
    it("should wait for button to be disabled",() => {
        browser.url("https://classic.crmpro.com/register/");
        const checkbox=$(`input[name='agreeTerms']`);
        const submitBtn= $('#submitButton');
        checkbox.click();
        submitBtn.waitForEnabled({ timeout: 3000 });
        console.log("current state is "+submitBtn.isEnabled());
        checkbox.click();
        submitBtn.waitForEnabled({ timeout: 3000,reverse: true })
        console.log("current state is "+submitBtn.isEnabled());
        assert.equal(false,submitBtn.isEnabled());
    })
})
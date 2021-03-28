const { expect } = require("chai");
const internetPage= require("../pages/internet-page");

describe("handling checkboxes", function(){

    it("checkbox page header",function(){
        browser.url('https://the-internet.herokuapp.com/');
        internetPage.clickOnLink(6);
        internetPage.h3Header.waitForDisplayed();
        const text= internetPage.h3Header.getText();
        expect(text).equals("Checkboxes");
    }),

    it("should click checkbox",function(){
        browser.url('https://the-internet.herokuapp.com/');
        internetPage.clickOnLink(6);
        internetPage.h3Header.waitForDisplayed();
        internetPage.clickOnCheckBoxElement(1);

        expect(internetPage.getCheckBoxElement(1).isSelected()).equals(true);
        browser.pause(5000);
    })
})
const { assert } = require("chai");
const loginPage= require("../pages/internet.page.login")

describe('Handle application login', () => {

    it('enter username',() => {
        browser.url('https://the-internet.herokuapp.com/login');
        loginPage.enterUserName('tomsmith');
        assert.equal('tomsmith',loginPage.userName.getValue());
    }),

    it('enter password',() => {
        loginPage.enterPassword('SuperSecretPassword');
        assert.equal('SuperSecretPassword',loginPage.password.getValue());
    }),

    it('click login button',() => {
        loginPage.clickOnLogin();
    }),

    it('clear the username text' ,() => {
        loginPage.userName.click();
        loginPage.userName.clearValue();
        assert.equal('',loginPage.userName.getValue());
    })   
    
})

const { assert } = require("chai");
const loginPage= require("../../pages/internet.page.login")
const loginData= require("../../testData/loginData")

describe('Handle application login', () => {

    loginData.inputs.forEach(function(inputs){
        it('enter username',() => {
            browser.url('https://the-internet.herokuapp.com/login');
            loginPage.enterUserName(inputs.username);
            assert.equal(inputs.username,loginPage.userName.getValue());
        }),
    
        it('enter password',() => {
            loginPage.enterPassword(inputs.password);
            assert.equal(inputs.password,loginPage.password.getValue());
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
   
    
})

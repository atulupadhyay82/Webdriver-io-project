const { assert } = require("chai");
const url= require("../../urls")
const ENV= process.env.ENV

describe("check page url", ()=> {

    it("get browser url", ()=>{
        console.log("opening the url"+ENV+" and url is"+url[process.env.ENV]);
        browser.url('./');
        assert.equal(browser.getUrl(),url[ENV]);
    })
})
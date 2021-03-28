const spiceJet= require("../pages/spicejet.actions")

describe('page action features', () => {

    it('move to element' ,()=>{
        browser.url('https://www.spicejet.com/');
        spiceJet.moveToElement(spiceJet.loginSignUpLink);
       // spiceJet.moveToElement(spiceJet.spiceClubMem);
        spiceJet.clickElement(spiceJet.memeberLogin);
        browser.pause(3000);
    })
    
})

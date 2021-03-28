class SpiceJet{

    get loginSignUpLink() { return $('#ctl00_HyperLinkLogin')};
    get spiceClubMem() { return $('=SpiceClub Members')};
    get memeberLogin() { return $('=Member Login') };

    /**
     *$(selector).moveTo({ xOffset, yOffset })
     * {Move the mouse by an offset of the specified element. If no element is specified, the move is relative to the current mouse cursor. 
     * If an element is provided but no offset, the mouse will be moved to the center of the element. 
     * If the element is not visible, it will be scrolled into view} element 
     */
    moveToElement(element){
        element.waitForDisplayed();
        element.moveTo();
    }

    clickElement(element){
        element.waitForDisplayed();
        element.click();
    }
}

module.exports= new SpiceJet();
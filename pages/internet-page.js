class InternetPage{

    get h3Header(){
        return $('h3');
    }

    /**
     * Can't use get here as function has params -index
     * @returns web element
     */
    getLinkElement(index){
        return $(`ul li:nth-child(${index}) a`);
    }

    clickOnLink(index){
        //Wait for an element for the provided amount of milliseconds to be displayed or not displayed.
        this.getLinkElement(index).waitForDisplayed();
        this.getLinkElement(index).click();
    }

    getCheckBoxElement(index){
        return $(`form#checkboxes input:nth-child(${index})`);
    }

    clickOnCheckBoxElement(index){
        this.getCheckBoxElement(index).waitForDisplayed();
        this.getCheckBoxElement(index).click();
    }
       
}

module.exports=new InternetPage();
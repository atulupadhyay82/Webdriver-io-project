class AlertPage{

    getAlertButton(index){
        return $(`ul>li:nth-child(${index}) button`);
    }

    clickOnAlertButton(index){
        this.getAlertButton(index).waitForDisplayed();
        this.getAlertButton(index).click();
    }

    get result(){
        return $('#result');
    }

    get fetchResultText(){
        return this.result.getText();
    }
}

module.exports=new AlertPage();
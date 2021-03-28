class KeysAction{

    get search(){ return $('#target'); }
    get resultLabel(){ return $('#result');}

    get resultLabelText(){
        return this.resultLabel.getText();
    }

    enterSearch(text){
        this.search.setValue(text);
    }
}

module.exports= new KeysAction();
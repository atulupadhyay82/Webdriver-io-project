class BlazePage{

    get parentNav(){
        return $('ul.list-nav-links');
    }

    get childElementsNav(){
        return this.parentNav.$$('li');
    }

    get getTextForLiNav(){
        this.childElementsNav.filter(element =>{
            console.log(element.getText());
        });
    }

    specificChildElement(index){
        console.log(this.parentNav.$(`li:nth-child(${index})`).getText());
    }

    get useCaseElements(){
        return $$('div#main_b_footer_second_block>ul>li');
    }

    get useCaseElementsText(){
        return this.useCaseElements.filter(element=>{
            console.log(element.getText());
        });
    }
}

module.exports= new BlazePage();
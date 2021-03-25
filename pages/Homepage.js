class Homepage{

    get pageHeader(){return $('h1')};
    get subHeading(){return $('.banner-text-content > .sub-text')};
    get supportLink(){return $("//*[text()='Support']")};
}

module.exports=new Homepage();
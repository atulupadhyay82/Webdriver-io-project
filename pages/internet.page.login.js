class LoginPage{

    get userName() { return $('#username')};
    get password() { return $('#password')};
    get loginBtn() { return $('button')};

    enterUserName(text){
        this.userName.waitForDisplayed();
        this.userName.setValue(text);
    }

    enterPassword(text){
        this.password.waitForDisplayed();
        this.password.setValue(text);
    }

     clickOnLogin(){
        this.loginBtn.waitForDisplayed();
        this.loginBtn.click();
    }
}

module.exports= new LoginPage();
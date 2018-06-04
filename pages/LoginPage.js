let commom = require('../util/Commom');

class LoginPage {
    constructor() {
        this.loginEmail = element(by.css('input#user'));
        this.loginPassword = element(by.css('input#password'));
        this.loginSubmit = element(by.css('input#login'));
    }

    setLoginEmail(email) {
        return commom.setElementValues(this.loginEmail, email);
    }

    setLoginPassword(password) {
        commom.setElementValues(this.loginPassword, password);
    }

    clickLoginSubmit() {
        commom.clickElement(this.loginSubmit);
    }

    open() {
        browser.waitForAngularEnabled(false);
        browser.get('login');
    }

    loginAccount(email, password) {
        this.open();
        this.setLoginEmail(email);
        this.setLoginPassword(password);
        this.clickLoginSubmit();
    }

    sendHome(){
        browser.pause(2000);
        browser.get('https://trello.com/');
    }
}

module.exports = new LoginPage();
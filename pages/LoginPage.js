let commom = require('../util/Commom');

class LoginPage {
    constructor() {
        this.loginEmail = element(by.css('input#user'));
        this.loginPassword = element(by.css('input#password'));
        this.loginSubmit = element(by.css('input#login'));
    }

    open() {
        browser.waitForAngularEnabled(false);
        browser.get('login');
    }

    loginAccount(email, password) {
        this.open();
        commom.setElementValues(this.loginEmail, email);
        commom.setElementValues(this.loginPassword, password);
        commom.clickElement(this.loginSubmit);
    }
}

module.exports = new LoginPage();

let commom = require('../util/Commom');
let currentUserLogin = null;

class LoginPage {
    constructor() {
        this.loginEmail = element(by.css('input#user'));
        this.loginPassword = element(by.css('input#password'));
        this.loginSubmit = element(by.css('input#login'));
        this.usserOptions = element(by.css('.member-initials'));
        this.logOut = element(by.css('a.js-logout'));

    }

    setLoginEmail(email) {
        return commom.setElementValues(this.loginEmail, email);
    }

    setLoginPassword(password) {
        return commom.setElementValues(this.loginPassword, password);
    }

    clickLoginSubmit() {
        return commom.clickElement(this.loginSubmit);
    }

    open() {
        browser.waitForAngularEnabled(false);
        browser.get('login');
    }

    loginAccount(email, password) {
        if (email !== currentUserLogin) {
            if (currentUserLogin == null) {
                this.open();
            }
            else {
                LogOut();
            }
            this.setLoginEmail(email);
            this.setLoginPassword(password);
            this.clickLoginSubmit();
            currentUserLogin = email;
        }
    }

    sendHome() {
        browser.pause(2000);
        browser.get('https://trello.com/');
    }

    LogOut() {
        commom.clickElement(this.usserOptions);
        commom.clickElement(this.logOut);
        browser.url('login');
    }
}

module.exports = new LoginPage();

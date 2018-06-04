let commom = require('../util/Commom');
let currentUserLogin = null;

class LoginPage {
    constructor() {
        this.loginEmail = element(by.css('input#user'));
        this.loginPassword = element(by.css('input#password'));
        this.loginSubmit = element(by.css('input#login'));
        this.userOptions = element(by.css('member-initials'));
        this.logOut = element(by.css('js-logout'));
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
                logOut();
            }
            commom.setElementValues(this.loginEmail, email);
            commom.setElementValues(this.loginPassword, password);
            commom.clickElement(this.loginSubmit);
            currentUserLogin = email;
        }

    }

    LogOut() {
        commom.clickElement(this.userOptions);
        commom.clickElement(this.logOut);
        browser.get('https://trello.com');
    }
}

module.exports = new LoginPage();
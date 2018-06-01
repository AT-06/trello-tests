class LoginPage {
    constructor() {
        this.loginEmail = element(by.css('input#user'));
        this.loginPassword = element(by.css('input#password'));
        this.loginSubmit = element(by.css('input#login'));
    }

    open() {
        browser.waitForAngularEnabled(false);
        browser.get('login');
        browser.elementIsVisible()
    }

    loginAccount(email, password) {
        this.open();
        this.loginEmail.sendKeys(email);
        this.loginPassword.sendKeys(password);
        this.loginSubmit.click();
    }
}

module.exports = new LoginPage();

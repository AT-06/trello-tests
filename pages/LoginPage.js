class LoginPage {
    constructor() {
        this.loginEmail = 'input#user';
        this.loginPassword = 'input#password';
        this.loginSubmit = 'input#login';
    }

    open() {
        browser.url('/login');
    }

    loginAccount(email, password) {
        this.open();
        browser.element(this.loginEmail).sendKeys(email);
        browser.element(this.loginPassword).sendKeys(password);
        browser.element(this.loginSubmit).click();
    }
}

module.exports = new LoginPage();
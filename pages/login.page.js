'use strict';
let commonActions = require('../util/commonActions');

/**
 * PageObject to login on Trello.
 */
class LoginPage {

    /**
     * Constructor of PageObject.
     */
    constructor() {
        this.loginEmail = element(By.css('input#user'));
        this.loginPassword = element(By.css('input#password'));
        this.loginSubmit = element(By.css('input#login'));
    }

    /**
     * Method to set the email Input Field.
     * @param email Value Provided.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    setLoginEmail(email) {
        return commonActions.setElementValues(this.loginEmail, email);
    }

    /**
     * Method to set the password Input Field.
     * @param password Value Provided.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    setLoginPassword(password) {
        return commonActions.setElementValues(this.loginPassword, password);
    }

    /**
     * Method to click on login button.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    clickLoginSubmit() {
        return commonActions.clickElement(this.loginSubmit);
    }

    /**
     * Method to go login page on Trello.
     * @returns {promise.Promise<any>}Promise.
     */
    open() {
        return commonActions.goToPage('login');
    }

    /**
     * Method to login on Trello.
     * @param email Value Provided.
     * @param password Value Provided.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    loginAccount(email, password) {
        return this.open()
            .then(() => this.setLoginEmail(email))
            .then(() => this.setLoginPassword(password))
            .then(() => this.clickLoginSubmit());
    }
}

module.exports = new LoginPage();

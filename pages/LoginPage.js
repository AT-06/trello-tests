'use strict';
let commonActions = require('../util/Commom');
let currentUserLogin = null;

/**
 * PageObject to login on Trello.
 */
class LoginPage {

    /**
     * Constructor of PageObject.
     */
    constructor() {
        this.loginEmail = element(by.css('input#user'));
        this.loginPassword = element(by.css('input#password'));
        this.loginSubmit = element(by.css('input#login'));
        this.usserOptions = element(by.css('.member-initials'));
        this.logOut = element(by.css('a.js-logout'));

    }

    /**
     * Method to set the email Input Field.
     * @param email Value Provided.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    setLoginEmail(email) {
        console.log(1)
        return commonActions.setElementValues(this.loginEmail, email);
    }

    /**
     * Method to set the password Input Field.
     * @param password Value Provided.
     * @returns {promise.Promise<ActionSequence>} Promise.
     *
     */
    setLoginPassword(password) {
        return commonActions.setElementValues(this.loginPassword, password);
    }

    /**
     * Method to click on login button.
     * @returns {Promise.<TResult>} Promise.
     */
    clickLoginSubmit() {
        return commonActions.clickElement(this.loginSubmit);
    }

    /**
     * Method to go login page on Trello.
     * @returns {promise.Promise<any>}Promise.
     *
     */
    open() {
        return commonActions.goToPage('login');
    }

    /**
     * Method to login on Trello.
     * @param email Value Provided.
     * @param password Value Provided.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     *
     */
    loginAccount(email, password) {
        return this.open()
            .then(() => this.setLoginEmail(email))
            .then(() => this.setLoginPassword(password))
            .then(() => this.clickLoginSubmit())
            .then(()=> browser.sleep(7000));

    }

}

module.exports = new LoginPage();

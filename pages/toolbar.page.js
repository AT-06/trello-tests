'use strict';

let commonActions = require('../util/commons');

/**
 * PageObject of ToolBar.
 */
class ToolbarPage {

    /**
     * Constructor of PageObject.
     */
    constructor() {
        this.plusButton = element(By.css('#header .icon-add'));
        // this.plusButton = element(by.css('div#header span.icon-add.light'));
        this.returnButton = element(By.className('js-back-menu'));
        this.headerLogoToGoHome = element(By.className('header-logo-default'));
    }

    /**
     * Method to click on plus button at toolbar.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    clickOnPlusButton() {
        return commonActions.clickElement(this.plusButton);
    }

    /**
     * Method to click on return button.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    clickReturnButton() {
        return commonActions.clickElement(this.returnButton);
    }

    /**
     * Method to go Home.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    goHomePage() {
        return commonActions.clickElement(this.headerLogoToGoHome);
    }


}

module.exports = ToolbarPage;

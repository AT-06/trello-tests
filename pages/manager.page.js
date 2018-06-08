const commonActions = require('../util/commons');

/**
 * PageObject of Manager.
 */
class ManagerPage {

    /**
     * Constructor of PageObject.
     */
    constructor() {
        this.showMenuLink = element(by.xpath('//span[text()="Show Menu"]'));
        this.moreLink = element(by.className('board-menu-navigation-item-link js-open-more'));
    }

    /**
     * Method to click on "Show Menu" link.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    showMainMenu() {
        return commonActions.clickElement(this.showMenuLink);
    }

    /**
     * Method to click on "More" link.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    showMoreOptions() {
        return commonActions.clickElement(this.moreLink);
    }

}

module.exports = ManagerPage;

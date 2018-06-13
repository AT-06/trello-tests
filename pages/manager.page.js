const commonActions = require('../util/commons');

/**
 * PageObject of Manager.
 */
class ManagerPage {

    /**
     * Constructor of PageObject.
     */
    constructor() {
        this.showMenuLink = element(By.xpath('//span[text()="Show Menu"]'));
        this.moreLink = element(By.className('board-menu-navigation-item-link js-open-more'));
        this.closeButtonMenu = element(By.xpath('//a[@title="Close the board menu."]'));
    }

    /**
     * Method to click on "Show Menu" link.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    showMainMenu() {
        return commonActions.clickElement(this.showMenuLink);
    }

    /**
     * Method to click on "Show Menu" link.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    showMoreOption() {
        return commonActions.clickElement(this.moreLink);
    }

    /**
     * Method to click on "Show Menu" link.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    closingMenuBeforeStart() {
        this.closeButtonMenu.click();
    }

    /**
     * Method to click on "More" link.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    showMoreOptions() {

        this.closingMenuBeforeStart();
        return this.showMainMenu()
            .then(() => this.showMoreOption());
    }
}

module.exports = ManagerPage;

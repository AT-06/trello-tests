'use strict';
const timeToWait = 20000;
const redDeleteButton = element(By.className('js-confirm full negate'));


class CommonActions {

    /**
     * Method to wait a element.
     * @param element WebElement.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    static waitForElement(element) {
        let isVisible = expectedConditions.visibilityOf(element);
        let isReady = expectedConditions.presenceOf(element);
        return browser.wait(expectedConditions.and(isVisible, isReady), timeToWait)
            .then(() => this.pauseInSeconds(1.5));
    }

    /**
     * Method to wait a element to be click able.
     * @param element WebElement.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    static waitForElementBeClickable(element) {
        return this.waitForElement(element)
            .then(() => browser.wait(expectedConditions.elementToBeClickable(element)));
    }

    /**
     * Method to click on element.
     * @param element WebElement.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */

    static clickElement(element) {
        return this.waitForElementBeClickable(element)
            .then(() => element.click());
    }

    /**
     * Method to set WebElement value.
     * @param element WebElement.
     * @param inputValue String value.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    static setElementValues(element, inputValue) {
        return this.waitForElement(element)
            .then(() => element.clear())
            .then(() => element.sendKeys(inputValue));
    }

    /**
     * Method to go to page.
     * @param page String page to go.
     * @returns {promise.Promise<any>} Promise.
     */
    static goToPage(page) {
        return browser.get(page);
    }

    /**
     * Method to click on last element of list.
     * @param list selector of list.
     * @returns {promise.Promise<any>} Promise.
     */
    static clickOnLastElementOfList(list) {
        return this.clickElement(element.all(By.xpath(list)).first());
    }

    /**
     * Method to verify a text inside to WebElement.
     * @param elementToVerify WebElement to verify.
     * @param list String text to compare.
     * @returns {promise.Promise<any>} Promise.
     */
    static isElementPresentOnList(elementToVerify, list) {
        return this.waitForElement(list)
            .then(() => elementToVerify.isPresent());
    }

    /**
     * Method to click on red delete button.
     * @returns {promise.Promise<any>} Promise.
     */
    static clickDeleteButton() {
        return this.waitForElement(redDeleteButton)
            .then(() => this.clickElement(redDeleteButton));
    }

    /**
     * Method to verify is an element contains a text.
     * @param element that is going to be verified.
     * @param text to compare the element.
     * @returns {promise.Promise<boolean>} Promise.
     */
    static isElementContainsText(element, text) {
        return this.waitForElement(element)
            .then(() => element.getText())
            .then((textOnElement) => {
                return textOnElement === text;
            });
    }

    static pauseInSeconds(time) {
        return browser.sleep(time * 1000);
    }
}

module.exports = CommonActions;

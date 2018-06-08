const timeToWait = 20000;
const nameTeam = element(by.css('#org-display-name'));
const descriptionTeam = element(by.css('#org-desc'));
const createButton = element(by.css('div#classic input.primary.wide.js-save'));
const deleteButton = element(by.className('js-confirm full negate'));
const expectedConditions = protractor.ExpectedConditions;

class Commons {


    static clickDeleteButton() {
        this.browserPause();
        this.clickElement(deleteButton);
    }

    /**
     * Method to wait a element.
     * @param element WebElement.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    static waitForElement(element) {
        let isVisible = expectedConditions.visibilityOf(element);
        let isReady = expectedConditions.presenceOf(element);
        return browser.wait(expectedConditions.and(isVisible, isReady))
            .then(() => browser.sleep(1500));
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

    static clickElement(element) {
        return this.waitForElementBeClickable(element)
            .then(() => element.click());
    }

    static submitElement(element) {
        this.waitForElement(element);
        return element.submit();
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
        return browser.waitForAngularEnabled(false)
            .then(() => browser.get(page));
    }

    /**
     * Method to verify a text inside to WebElement.
     * @param element WebElement.
     * @param text String text to compare.
     * @returns {promise.Promise<any>} Promise.
     */
    static isElementContainsText(element, text) {
         return this.waitForElement(element)
            .then(() => element.getText())
            .then((textOnElement) => {
                return textOnElement === text;
            });
    }

    static getTextElement(element) {
        this.waitForElement(element);
        return element.getText();
    }

    static browserPause() {
        return browser.pause(2500);
    }

    static elementOnView(elementCSS, elementName) {
        let elementToReturn = null;
        this.getElement(elementCSS, timeToWait).elements('span').value.forEach(element => {
            if (element.getText().includes(elementName)) {
                elementToReturn = element;
            }
        });
        return elementToReturn.toString();
    }
}

module.exports = Commons;

const timeToWait = 20000;

class Commom {

    static waitForElement(element) {
        browser.wait(function () {
            browser.sleep(1500);
            return element.isDisplayed();
        }, timeToWait);
    }

    static clickElement(element) {
        this.waitForElement(element);
        element.click();
    }

    static submitElement(element) {
        this.waitForElement(element);
        element.submit();
    }

    static setElementValues(element, values) {
        this.waitForElement(element);
        element.sendKeys(values);
    }

    static getTextElement(element) {
        this.waitForElement(element);
        element.getText();
    }

    static browserPause() {
        browser.pause(1500);
    }
}

module.exports = Commom;

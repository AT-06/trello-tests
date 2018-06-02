const timeToWait = 20000;

class Commom {

    static waitForElement(element) {
        browser.wait(function () {
            browser.sleep(1000);
            return element.isDisplayed();
        }, timeToWait);
    }

    static clickElement(element) {
        this.waitForElement(element);
        element.click();
    }

    static setElementValues(element, values) {
        this.waitForElement(element);
        element.sendKeys(values);
    }
}

module.exports = Commom;

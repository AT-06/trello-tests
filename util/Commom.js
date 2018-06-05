const timeToWait = 20000;

class Commom {

    static waitForElement(element) {
        browser.wait(function () {
            browser.sleep(1500)
                .then(function () {
                    console.log("waiting for the element");
                });
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
        element.clear();
        element.sendKeys(values);
    }

    static getTextElement(element) {
        this.waitForElement(element);
        return element.getText();
    }

    static browserPause() {
        browser.pause(2000);
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

module.exports = Commom;

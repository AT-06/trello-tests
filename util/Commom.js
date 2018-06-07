const timeToWait = 20000;
const nameTeam = element(by.css('#org-display-name'));
const descriptionTeam = element(by.css('#org-desc'));
const createButton = element(by.css('div#classic input.primary.wide.js-save'));
const deleteButton = element(by.className('js-confirm full negate'));

class Commom {


    static clickDeleteButton() {
        this.browserPause();
        this.clickElement(deleteButton);
    }

    static addQuickTeam(nameTeamInput, descriptionTeamInput) {
        this.setElementValues(nameTeam, nameTeamInput);
        return this.setElementValues(descriptionTeam, descriptionTeamInput)
            .then(this.clickElement(createButton));
    }

    static waitForElement(element) {
        browser.wait(function () {
            browser.sleep(1500)
                .then(function () {
                    console.log("waiting for the element");
                });
            return element.isDisplayed() && element.isPresent();
        }, timeToWait);
    }

    static clickElement(element) {
        this.waitForElement(element);
        return element.click();
    }

    static submitElement(element) {
        this.waitForElement(element);
        return element.submit();
    }

    static setElementValues(element, values) {
        this.waitForElement(element);
        element.clear();
        return element.sendKeys(values);
    }

    static getTextElement(element) {
        this.waitForElement(element);
        return element.getText();
    }

    static browserPause() {
        browser.pause(2500);
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

let commom = require('../util/Commom');

class SettingsMenu {
    constructor() {
        this.deleteOption = element(by.css('#content a.quiet-button'));
        this.deleteButton = element(by.className('js-confirm full negate'));
    }

    clickDeleteOption() {
        commom.clickElement(this.deleteOption);
    }

    clickDeleteButton() {
        commom.clickElement(this.deleteButton);
    }

    deleteGroupSettingsMenu() {
        this.clickDeleteOption();
        this.clickDeleteButton();
    }
}

module.exports = new SettingsMenu();

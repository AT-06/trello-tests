let commom = require('../util/Commom');

class SettingsMenu {
    constructor() {
        this.deleteOption = element(by.css('#content a.quiet-button'));
        this.deleteButton = element(by.className('js-confirm full negate'));
        this.groupName = element(by.css('#content h1.u-inline'));
        this.editButton = element(by.className('button-link tabbed-pane-header-details-edit js-edit-profile'));
        this.nameGroup = element(by.name('displayName'));
        this.saveButton = element(by.className('primary wide js-submit-profile'));
        this.backButton = element(by.className('header-btn js-back-menu'));
    }

    clickBackButton() {
        commom.clickElement(this.backButton);
    }

    clickSaveButton() {
        commom.clickElement(this.saveButton);
    }

    setNameGroup(values) {
        commom.setElementValues(this.nameGroup, values);

    }

    clickEditButton() {
        commom.clickElement(this.editButton);
    }

    getNameGroup() {
        return this.groupName.getText();
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

    editGroup(values) {
        this.clickEditButton();
        this.setNameGroup(values);
        this.clickSaveButton();
        commom.browserPause();
    }
}

module.exports = new SettingsMenu();

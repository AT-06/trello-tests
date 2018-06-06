let commom = require('../util/Commom');

class SettingsMenu {
    constructor() {
        this.deleteOption = element(by.css('#content a.quiet-button'));
        this.groupName = element(by.css('#content h1.u-inline'));
        this.editButton = element(by.className('button-link tabbed-pane-header-details-edit js-edit-profile'));
        this.nameGroup = element(by.name('displayName'));
        this.saveButton = element(by.className('primary wide js-submit-profile'));
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
        commom.browserPause();
        return commom.getTextElement(this.groupName);
    }

    clickDeleteOption() {
        commom.clickElement(this.deleteOption);
    }


    deleteGroupSettingsMenu() {
        this.clickDeleteOption();
        commom.clickDeleteButton();
    }

    editGroup(values) {
        this.clickEditButton();
        this.setNameGroup(values);
        this.clickSaveButton();
        commom.browserPause();
    }
}

module.exports = new SettingsMenu();

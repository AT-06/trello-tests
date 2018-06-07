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
        return commom.clickElement(this.saveButton);
    }

    setNameGroup(values) {
        return commom.setElementValues(this.nameGroup, values);

    }

    clickEditButton() {
        return commom.clickElement(this.editButton);
    }

    getNameGroup(nameGroup) {
        // return commom.browserPause()
        //     .then(commom.getTextElement(this.groupName));
        return commom.getTextElement(this.groupName, nameGroup);
    }

    clickDeleteOption() {
        return commom.clickElement(this.deleteOption);
    }


    deleteGroupSettingsMenu() {
        return this.clickDeleteOption().then(commom.clickDeleteButton());
    }

    editGroup(values) {
        this.clickEditButton();
        this.setNameGroup(values);
        this.clickSaveButton();
        commom.browserPause();
    }
}

module.exports = new SettingsMenu();

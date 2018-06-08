let commonActions = require('../util/commons');

class SettingsMenu {
    constructor() {
        this.deleteOption = element(by.css('#content a.quiet-button'));
        this.groupName = element(by.css('#content h1.u-inline'));
        this.editButton = element(by.className('button-link tabbed-pane-header-details-edit js-edit-profile'));
        this.nameGroup = element(by.name('displayName'));
        this.saveButton = element(by.className('primary wide js-submit-profile'));
    }

    clickSaveButton() {
        return commonActions.clickElement(this.saveButton);
    }

    setNameGroup(values) {
        return commonActions.setElementValues(this.nameGroup, values);

    }

    clickEditButton() {
        return commonActions.clickElement(this.editButton);
    }

    isTeamNameSameToCreated(nameGroup) {
        return commonActions.isElementContainsText(this.groupName, nameGroup);
    }

    clickDeleteOption() {
        return commonActions.clickElement(this.deleteOption);
    }


    deleteGroupSettingsMenu() {
        return this.clickDeleteOption().then(commonActions.clickDeleteButton());
    }

    editGroup(values) {
        this.clickEditButton();
        this.setNameGroup(values);
        this.clickSaveButton();
        commonActions.browserPause();
    }
}

module.exports = new SettingsMenu();

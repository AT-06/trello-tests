let commonActions = require('../util/commons');

class SettingsMenu {
    constructor() {
        this.deleteOption = element(by.css('#content a.quiet-button'));
        this.groupName = element(by.css('#content h1.u-inline'));
        this.editButton = element(by.xpath('//div[@class="js-current-details"]/child::a'));
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
        return this.clickEditButton()
            .then(() => this.setNameGroup(values))
            .then(() => this.clickSaveButton());
    }
}

module.exports = new SettingsMenu();

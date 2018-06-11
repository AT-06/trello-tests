let commonActions = require('../util/commons');

class SettingsMenu {
    constructor() {
        this.deleteOption = element(by.css('#content a.quiet-button'));
        this.groupName = element(by.css('#content h1.u-inline'));
        this.editButton = element(by.xpath('//div[@class="js-current-details"]/child::a'));
        this.nameGroup = element(by.name('displayName'));
        this.descriptionTeam = element(by.css('textarea[name="desc"]'));
        this.saveButton = element(by.className('primary wide js-submit-profile'));
    }

    clickSaveButton() {
        return commonActions.clickElement(this.saveButton);
    }

    setNameGroup(values) {
        return commonActions.setElementValues(this.nameGroup, values);
    }

    setTeamDescription(values) {
        return commonActions.setElementValues(this.descriptionTeam, values);
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

    fillTeamFields(teamInputs) {
        /*return this.setTeamName(this.teamNameField, teamNameInput)
            .then(this.setTeamDescription(this.teamDescriptionField, teamDescriptionInput))
            .then(() => this.createTeam());*/
        this.printMap(teamInputs);
        return this.clickSaveButton();
    }

    printMap(teamInputs) {
        let jsonToFillFields = {
            'name' : () => this.setNameGroup(teamInputs.name),
            'description' : () => this.setTeamDescription(teamInputs.description)
        };
        Object.keys(teamInputs).forEach(key => {
            jsonToFillFields[key].call();
        });
    }

    editGroup(teamInputs) {
        return this.clickEditButton()
            .then(() => this.fillTeamFields(teamInputs));
    }
}

module.exports = new SettingsMenu();

let commom = require('../util/Commom');

class LeftSideBar {
    constructor() {
        this.addTeamButton = element(by.xpath('//span[text()= "Create a team"]'));
        this.nameTeam = element(by.css('#org-display-name'));
        this.descriptionTeam = element(by.css('#org-desc'));
        this.createButton = element(by.css('div#classic input.primary.wide.js-save'));
        this.panelToCheck = element(by.className('header-logo-default'));

        this.quickAddButton = element(by.css('div#header span.icon-add.light'));
        this.createTeam = element(by.className('js-new-org'));

    }

    checkPanel() {
        commom.waitForElement(this.panelToCheck);
        return this.panelToCheck.isDisplayed();
    }

    clickCreateTeamOption() {
        commom.clickElement(this.createTeam);
    }

    clickAddTeamButton() {
        commom.clickElement(this.addTeamButton);
    }

    setNameTeam(value) {
        commom.setElementValues(this.nameTeam, value);
    }

    setDescriptionTeam(value) {
        commom.setElementValues(this.descriptionTeam, value);
    }

    clickCreateButton() {
        commom.clickElement(this.createButton);
    }

    clickQuickButton() {
        commom.clickElement(this.quickAddButton);
    }

    addTeam(nameTeam, descriptionTeam) {
        this.clickAddTeamButton();
        this.setNameTeam(nameTeam);
        this.setDescriptionTeam(descriptionTeam);
        this.clickCreateButton();
        commom.browserPause();
    }

    addQuickTeam(nameTeam, descriptionTeam) {
        this.clickQuickButton();
        this.clickCreateTeamOption();
        this.setNameTeam(nameTeam);
        this.setDescriptionTeam(descriptionTeam);
        this.clickCreateButton();
        commom.browserPause();
    }
}

module.exports = new LeftSideBar();

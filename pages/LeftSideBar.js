let commom = require('../util/Commom');

class LeftSideBar {
    constructor() {
        this.addTeamButton = element(by.xpath('//span[text()= "Create a team"]'));
        this.nameTeam = element(by.css('#org-display-name'));
        this.descriptionTeam = element(by.css('#org-desc'));
        this.createButton = element(by.css('div#classic input.primary.wide.js-save'));

        this.quickAddButton = element(by.css('div#header span.icon-add.light'));
        this.createTeam = element(by.className('js-new-org'));

    }


     clickCreateTeamOption() {
        return   commom.clickElement(this.createTeam);
    }

     clickAddTeamButton() {
        return  commom.clickElement(this.addTeamButton);
    }

     setNameTeam(value) {
        return  commom.setElementValues(this.nameTeam, value);
    }

     setDescriptionTeam(value) {
        return  commom.setElementValues(this.descriptionTeam, value);
    }

     clickCreateButton() {
        return  commom.clickElement(this.createButton);
    }

     clickQuickButton() {
        return  commom.clickElement(this.quickAddButton);
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

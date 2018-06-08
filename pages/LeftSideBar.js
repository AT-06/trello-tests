let common = require('../util/Commom');

class LeftSideBar {
    constructor() {
        this.addTeamButton = element(by.xpath('//span[text()= "Create a team"]'));
        this.addTeamButtonMobile = element(by.className('.quiet-button.u-float-left'));
        this.nameTeam = element(by.css('#org-display-name'));
        this.descriptionTeam = element(by.css('#org-desc'));
        this.createButton = element(by.css('div#classic input.primary.wide.js-save'));
    }

    clickAddTeamButton() {
        return common.clickElement(this.addTeamButton);
    }

    setTeamName(element, input) {
        return common.setElementValues(element, input);
    }

    setTeamDescription(element, input) {
        return common.setElementValues(element, input);
    }

    addTeam(nameTeam, descriptionTeam) {
        return this.clickAddTeamButton()
            .then(this.addQuickTeam(nameTeam, descriptionTeam))
            .then(common.browserPause());
    }

    addQuickTeam(nameTeamInput, descriptionTeamInput) {
        return this.setTeamName(this.nameTeam, nameTeamInput)
            .then(this.setTeamDescription(this.descriptionTeam, descriptionTeamInput))
            .then(common.clickElement(this.createButton));
    }

}

module.exports = new LeftSideBar();

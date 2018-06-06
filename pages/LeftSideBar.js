let commom = require('../util/Commom');

class LeftSideBar {
    constructor() {
        this.addTeamButton = element(by.xpath('//span[text()= "Create a team"]'));
    }

    clickAddTeamButton() {
        return commom.clickElement(this.addTeamButton);
    }

    addTeam(nameTeam, descriptionTeam) {
        this.clickAddTeamButton();
        commom.addQuickTeam(nameTeam, descriptionTeam);
        commom.browserPause();
    }

}

module.exports = new LeftSideBar();

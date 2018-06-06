let commom = require('../util/Commom');

class ToolBarPage {
    constructor() {
        this.quickAddButton = element(by.css('div#header span.icon-add.light'));
        this.createTeam = element(by.className('js-new-org'));
        this.returnButton = element(by.className('js-back-menu'));
    }

    clickReturnButton() {
        commom.browserPause();
        return commom.clickElement(this.returnButton);
    }

    clickQuickButton() {
        commom.clickElement(this.quickAddButton);
    }

    clickCreateTeamOption() {
        commom.clickElement(this.createTeam);
    }

    addQuickTeamSinceToolbar(nameTeam, descriptionTeam) {
        this.clickQuickButton();
        this.clickCreateTeamOption();
        commom.addQuickTeam(nameTeam, descriptionTeam);
        commom.browserPause();
    }

}

module.exports = new ToolBarPage();

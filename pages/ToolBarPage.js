let commom = require('../util/Commom');

class ToolBarPage {
    constructor() {
        this.quickAddButton = element(by.css('div#header span.icon-add.light'));
        this.createTeam = element(by.className('js-new-org'));
        this.returnButton = element(by.className('js-back-menu'));
    }

    clickReturnButton() {
        return commom.clickElement(this.returnButton);
    }

    clickQuickButton() {
        return commom.clickElement(this.quickAddButton);
    }

    clickCreateTeamOption() {
        return commom.clickElement(this.createTeam);
    }

    addQuickTeamSinceToolbar(nameTeam, descriptionTeam) {
        this.clickQuickButton();
        return this.clickCreateTeamOption()
            .then(commom.addQuickTeam(nameTeam, descriptionTeam));
        //this.clickCreateTeamOption();
        //commom.addQuickTeam(nameTeam, descriptionTeam);
        // commom.browserPause();
    }
}

module.exports = new ToolBarPage();

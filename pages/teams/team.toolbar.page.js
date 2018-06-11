'use strict';
const ToolBar = require('../toolbar.page');
let commonActions = require('../../util/commons');
let teamCreationForm = require('../teams/team.creation.page');


class TeamToolBar extends ToolBar {
    constructor() {
        super();
        this.teamCreation = element(by.className('js-new-org'));
    }

    /**
     * Method to click on create team but quick form.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    clickOnTeamCreation() {
        return commonActions.clickElement(this.teamCreation);
    }

    addTeam(teamInputs) {
        return this.clickOnPlusButton()
            .then(this.clickOnTeamCreation())
            .then(teamCreationForm.fillTeamFields(teamInputs));
    }
}

module.exports = new TeamToolBar();
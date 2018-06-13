'use strict';
const ToolBar = require('../toolbar.page');
let commonActions = require('../../util/commons');
let teamCreationForm = require('../teams/team.creation.page');

/**
 * Page object of team tool bar.
 */
class TeamToolBar extends ToolBar {

    /**
     * Constructor.
     */
    constructor() {
        super();
        this.teamCreation = element(By.className('js-new-org'));
    }

    /**
     * Method to click on create team but quick form.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    clickOnTeamCreation() {
        return commonActions.clickElement(this.teamCreation);
    }

    /**
     * Method to add a new team.
     * @param teamInputs values to fill in teams fields.
     * @returns {promise.Promise<any>} Promise.
     */
    addTeam(teamInputs) {
        return this.clickOnPlusButton()
            .then(this.clickOnTeamCreation())
            .then(teamCreationForm.fillTeamFields(teamInputs));
    }
}

module.exports = new TeamToolBar();

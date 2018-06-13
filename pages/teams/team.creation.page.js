'use strict';
let common = require('../../util/commons');

/**
 * Page object to create a new team.
 */
class TeamCreationPage {

    /**
     * Constructor.
     */
    constructor() {
        this.teamNameField = element(By.css('#org-display-name'));
        this.teamDescriptionField = element(By.css('#org-desc'));
        this.createButton = element(By.css('div#classic input.primary.wide.js-save'));

    }

    /**
     * Method to set team name.
     * @param element to fill.
     * @param input the value to fill.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    setTeamName(element, input) {
        return common.setElementValues(element, input);
    }

    /**
     * Method to set team description
     * @param element to fill.
     * @param input the value to fill.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    setTeamDescription(element, input) {
        return common.setElementValues(element, input);
    }

    /**
     * Method to integrate steps to create a new team.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    createTeam() {
        return common.clickElement(this.createButton);
    }

    /**
     * Method to fill fields and click on create team button.
     * @param teamInputs the values.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    fillTeamFields(teamInputs) {
        /*return this.setTeamName(this.teamNameField, teamNameInput)
            .then(this.setTeamDescription(this.teamDescriptionField, teamDescriptionInput))
            .then(() => this.createTeam());*/
        this.iterateJson(teamInputs);
        return this.createTeam();
    }

    /**
     * Method to execute each field method to fill it.
     * @param teamInputs the values.
     */
    iterateJson(teamInputs) {
        let jsonToFillFields = {
            'name' : () => this.setTeamName(this.teamNameField, teamInputs.name),
            'description' : () => this.setTeamDescription(this.teamDescriptionField, teamInputs.description)
        };
        Object.keys(teamInputs).forEach(key => {
            jsonToFillFields[key].call();
        });
    }
}

module.exports = new TeamCreationPage();

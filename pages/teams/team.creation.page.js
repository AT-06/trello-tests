'use strict';
let common = require('../../util/commons');

class TeamCreationPage {
    constructor() {
        this.teamNameField = element(by.css('#org-display-name'));
        this.teamDescriptionField = element(by.css('#org-desc'));
        this.createButton = element(by.css('div#classic input.primary.wide.js-save'));

    }

    setTeamName(element, input) {
        return common.setElementValues(element, input);
    }

    setTeamDescription(element, input) {
        return common.setElementValues(element, input);
    }

    createTeam() {
        return common.clickElement(this.createButton);
    }

    fillTeamFields(teamInputs) {
        /*return this.setTeamName(this.teamNameField, teamNameInput)
            .then(this.setTeamDescription(this.teamDescriptionField, teamDescriptionInput))
            .then(() => this.createTeam());*/
        this.printMap(teamInputs);
        return this.createTeam();
    }

    printMap(teamInputs) {
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
'use strict';

let common = require('../util/commons');
const format = require('string-format');
let teamCreationForm = require('../pages/teams/team.creation.form');

class LeftSideBar {

    /**
     * Constructor.
     */
    constructor() {
        this.addTeamButton = element(by.xpath('//span[text()= "Create a team"]'));
        this.addTeamButtonMobile = element(by.className('.quiet-button.u-float-left'));
        this.teamList = '//span[text()="{}"]/parent::a/parent::li';
    }

    /**
     * Method to click on left side bar button "Create a Team".
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    clickAddTeamButton() {
        return common.clickElement(this.addTeamButton);
    }

    /**
     *
     * @param nameTeam is the name of the new team.
     * @param descriptionTeam is the description of the new team.
     * @returns {promise.Promise<any>} Promise.
     */
    addTeam(nameTeam, descriptionTeam) {
        return this.clickAddTeamButton()
            .then(teamCreationForm.fillTeamFields(nameTeam, descriptionTeam));
    }

    clickLastTeam(teamName) {
        let foo = format(this.teamList, teamName);
        return common.clickElement(element(by.xpath(foo)));
    }
}

module.exports = new LeftSideBar();

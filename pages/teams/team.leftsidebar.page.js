'use strict';

let commonActions = require('../../util/commons');
const format = require('string-format');
let teamCreation = require('../teams/team.creation.page');

class TeamLeftSideBar {

    /**
     * Constructor.
     */
    constructor() {
        this.addTeamButton = element(by.xpath('//span[text()= "Create a team"]'));
        this.addTeamButtonMobile = element(by.className('.quiet-button.u-float-left'));
        this.teamList = '//span[text()="{}"]/parent::a/parent::li';
        this.teamList22 = '//div[text()="teams"]/parent::div/following::ul';
        this.leftSpan = '//div[text()="teams"]/following::ul/descendant::span';
    }

    /**
     * Method to click on left side bar button "Create a Team".
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    clickAddTeamButton() {
        return commonActions.clickElement(this.addTeamButton);
    }

    /**
     *
     * @param nameTeam is the name of the new team.
     * @param descriptionTeam is the description of the new team.
     * @returns {promise.Promise<any>} Promise.
     */
    addTeam(nameTeam, descriptionTeam) {
        return this.clickAddTeamButton()
            .then(teamCreation.fillTeamFields(nameTeam, descriptionTeam));
    }

    clickLastTeam(teamName) {
        let foo = format(this.teamList, teamName);
        return commonActions.clickElement(element(by.xpath(foo)));
    }
}

module.exports = new TeamLeftSideBar();

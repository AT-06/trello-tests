'use strict';

let commonActions = require('../../util/commonActions');
const format = require('string-format');
let teamCreation = require('../teams/team.creation.page');

/**
 * Page object of left side bar for teams.
 */
class TeamLeftSideBar {

    /**
     * Constructor.
     */
    constructor() {
        this.addTeamButton = element(By.xpath('//nav[@class="home-left-sidebar-container"]/descendant::button'));
        this.teamList = '//span[text()="{}"]/parent::a/parent::li';
        this.leftFirstListElement = element(By.xpath('//nav[@class="home-left-sidebar-container"]/descendant::button/ancestor::ul/child::li[1]'));
        this.homeButton = element(By.xpath('//span[text()="Home"]'));
    }

    /**
     * Method to click on home page from  left side bar.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    clickHomeButton() {
        return commonActions.clickElement(this.homeButton);
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
    addTeam(teamInputs) {
        return this.clickAddTeamButton()
            .then(() => teamCreation.fillTeamFields(teamInputs));
    }

    /**
     * Click created team.
     * @param teamName the team name.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    clickLastTeam(teamName) {
        let foo = format(this.teamList, teamName);
        return commonActions.clickElement(element(by.xpath(foo)));
    }

    /**
     * Method to know if team was deleted.
     * @param teamName to verify.
     * @returns {promise.Promise<boolean>} Promise.
     */
    doesTeamExistInLeftSideBar(teamName) {
        return commonActions.isElementContainsText(this.leftFirstListElement, teamName);
    }
}

module.exports = new TeamLeftSideBar();

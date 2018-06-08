'use strict';

let commonActions = require('../util/commons');
let teamCreationForm = require('../pages/teams/team.creation.form');


/**
 * PageObject of ToolBar.
 */
class ToolbarPage {

    /**
     * Constructor of PageObject.
     */
    constructor() {
        this.plusButton = element(by.css('div#header span.icon-add.light'));
        this.teamCreation = element(by.className('js-new-org'));

        this.returnButton = element(by.className('js-back-menu'));
        this.headerLogoToGoHome = element(by.className('header-logo-default'));
    }

    /**
     * Method to click on plus button at toolbar.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    clickOnPlusButton() {
        return commonActions.clickElement(this.plusButton);
    }

    /**
     * Method to click on create team but quick form.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    clickOnTeamCreation() {
        return commonActions.clickElement(this.teamCreation);
    }

    addTeam(nameTeam, descriptionTeam) {
        return this.clickOnPlusButton()
            .then(this.clickOnTeamCreation())
            .then(teamCreationForm.fillTeamFields(nameTeam, descriptionTeam));
    }


    /**
     * Method to click on return button.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    clickReturnButton() {
        return commonActions.clickElement(this.returnButton);
    }

    /**
     * Method to go Home.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    goHomePage() {
        return commonActions.clickElement(this.headerLogoToGoHome);
    }


}

module.exports = new ToolbarPage;

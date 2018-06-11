'use strict';
let commonActions = require('../../util/commons');

/**
 * Page object of team content page.
 */
class TeamContentPage {

    /**
     * Constructor.
     */
    constructor() {
        this.deleteTeamLink = element(by.xpath('//div[@class="window-module u-gutter"]/child::a/child::span'));
        this.deleteTeamForEverButton = element(by.css('div#classic input.js-confirm.full.negate'));
    }

    /**
     * Method to click delete team link.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    clickDeleteTeamLink() {
        return commonActions.clickElement(this.deleteTeamLink);
    }

    /**
     * Method to click on delete team for ever button.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    clickDeleteTeamForEverButton() {
        return commonActions.clickElement(this.deleteTeamForEverButton);
    }

    /**
     * Method to integrate delete team steps.
     * @returns {promise.Promise<ActionSequence>} Promise
     */
    deleteTeam() {
        return this.clickDeleteTeamLink()
            .then(() => this.clickDeleteTeamForEverButton());
    }
}

module.exports = new TeamContentPage();

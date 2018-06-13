'use strict';
let commonActions = require('../util/commons');

/**
 * Page object of right side bar.
 */
class RightSidebarPage {

    /**
     * Constructor.
     */
    constructor() {
        // this.settingsButton = element(by.xpath('//span[text()="Settings"]'));
        this.settingsButton = element(by.xpath('//span[text()="Settings"]/parent::span/parent::a/parent::div'));
    }

    /**
     * Method to click team setttings button.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    goToTeamSettings() {
        return commonActions.clickElement(this.settingsButton);
    }
}

module.exports = new RightSidebarPage();

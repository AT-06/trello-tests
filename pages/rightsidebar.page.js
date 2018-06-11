'use strict';
let commonActions = require('../util/commons');

class RightSidebarPage {
    constructor() {
        this.settingsButton = element(by.xpath('//span[text()="Settings"]'));
    }

    goToTeamSettings() {
        return commonActions.clickElement(this.settingsButton);
    }
}

module.exports = new RightSidebarPage();
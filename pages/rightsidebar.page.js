'use strict';
let commonActions = require('../util/commons');

class RightSidebarPage {
    constructor() {
        this.settingsButton = element(by.xpath('//span[text()="Settings"]'));
        this.deleteTeamLink = element(by.xpath('//div[@class="window-module u-gutter"]/child::a/child::span'));
        this.deleteTeamForEverButton = element(by.className('js-confirm.full.negate'));
    }

    goToTeamSettings() {
        return commonActions.clickElement(this.settingsButton);
    }
}

module.exports = new RightSidebarPage();
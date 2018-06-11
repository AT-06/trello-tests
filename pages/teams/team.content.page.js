'use strict';
let commonActions = require('../../util/commons');

class TeamContentPage {
    constructor() {
        this.deleteTeamLink = element(by.xpath('//div[@class="window-module u-gutter"]/child::a/child::span'));
        this.deleteTeamForEverButton = element(by.css('div#classic input.js-confirm.full.negate'));
    }

    clickDeleteTeamLink() {
        return commonActions.clickElement(this.deleteTeamLink);
    }

    clickDeleteTeamForEverButton() {
        return commonActions.clickElement(this.deleteTeamForEverButton);
    }

    deleteTeam() {
        return this.clickDeleteTeamLink()
            .then(() => this.clickDeleteTeamForEverButton());
    }
}

module.exports = new TeamContentPage();
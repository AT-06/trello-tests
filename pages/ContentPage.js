let commom = require('../util/Commom');

class ContentPage {
    constructor() {
        //improve this selector.
        this.boardsButton = element(by.xpath('//span[text()="Boards" and @class="app-scripts-views-home-presentational-tab__tabText__212hs" ]'));
        this.pathElement = '//h3[text()="GROUPNAME"]/parent::div//span[text()="Settings"]/ancestor::a';
        this.groupList = '//h3[text()="GROUPNAME"]/parent::div/parent::div//span[text()="Create new board…"]//ancestor::a';
        this.boardTittle = element(by.className('subtle-input'));
        this.createBoardButton = element(by.css('#classic button.primary'));
        this.nameTeam = '//h3[text()="GROUPNAME"]';
        this.boardAdded = '//h3[text()="GROUPNAME"]/parent::div/parent::div//span[text()="BOARD"]//ancestor::a';
    }

    checkNameTeam(group) {
        this.teamList = element(by.xpath(this.nameTeam.replace('GROUPNAME', group)));
        return this.teamList.isPresent();
    }

    checkBoard(group, board) {
        this.board = element(by.xpath(this.boardAdded.replace('GROUPNAME', group).replace('BOARD', board)));
        return commom.getTextElement(this.board);
    }

    clickCreateBoardButton() {
        //commom.browserPause();
        commom.submitElement(this.createBoardButton);
    }

    setBoardTittle(boardName) {
        commom.setElementValues(this.boardTittle, boardName);
    }

    clickBoardsButton() {
        commom.clickElement(this.boardsButton);
    }

    clickSelectSetting(group) {
        this.groupsPanel = element(by.xpath(this.pathElement.replace('GROUPNAME', group)));
        commom.clickElement(this.groupsPanel);
    }

    clickSelectMembers(group) {
        this.groupsMenu = element(by.xpath(this.groupList.replace('GROUPNAME', group)));
        commom.clickElement(this.groupsMenu);
    }

    selectGroup(group) {
        commom.browserPause();
        this.clickBoardsButton();
        this.clickSelectSetting(group);
    }

    addBoard(boardName, group) {
        this.clickBoardsButton();
        this.clickSelectMembers(group);
        this.setBoardTittle(boardName);
        this.clickCreateBoardButton();
        commom.browserPause();
        commom.browserPause();
    }
}

module.exports = new ContentPage();

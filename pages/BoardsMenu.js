let commom = require('../util/Commom');

class BoardsMenu {
    constructor() {
        //improve this selector.
        this.boardsButton = element(by.xpath('//span[text()="Boards" and @class="app-scripts-views-home-presentational-tab__tabText__212hs" ]'));
        this.pathElement = '//h3[text()="GROUPNAME"]/parent::div//span[text()="Settings"]/ancestor::a';
        this.groupList = '//h3[text()="GROUPNAME"]/parent::div/parent::div//span[text()="Create new board…"]//ancestor::a';
        this.boardTittle = element(by.className('subtle-input'));
        this.createBoardButton = element(by.css('#classic button.primary'));
    }

    clickCreateBoardButton() {
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
        this.clickBoardsButton();
        this.clickSelectSetting(group);
    }

    addBoard(boardName, group) {
        this.clickBoardsButton();
        this.clickSelectMembers(group);
        this.setBoardTittle(boardName);
        this.clickCreateBoardButton();
        commom.browserPause();
    }
}

module.exports = new BoardsMenu();

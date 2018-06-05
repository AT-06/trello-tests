let commom = require('../util/Commom');

class BoardsPage {
    constructor() {
        this.boardsName = element(by.className('board-header-btn board-header-btn-name js-rename-board'));
    }

    getNameBoard() {
        return this.boardsName.getText();
    }
}

module.exports = new BoardsPage();

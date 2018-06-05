let commom = require('../util/Commom');

class BoardsPage {
    constructor() {
        this.boardsName = element(by.className('board-header-btn board-header-btn-name js-rename-board'));
    }

    get nameBoard() {
        return commom.getTextElement(this.boardsName);
    }
}

module.exports = new BoardsPage();

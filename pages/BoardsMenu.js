let commom = require('../util/Commom');

class BoardsMenu {
    constructor() {
        //improve this selector.
        this.boardsButton = element(by.className('app-scripts-views-home-presentational-tab__tabLink__3C9rw app-scripts-views-home-presentational-tab__selected__1gsiC'));
        this.groupsPanel = element(by.className('content-all-boards'));
    }

    clickBoardsButton(){
        commom.clickElement(this.boardsButton);
    }
}
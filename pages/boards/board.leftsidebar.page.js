'use strict';
const commonActions = require('../../util/commons');

/**
 * Page Object of Account Content.
 */
class BoardLeftSideBar {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.boardsButtonOnLeftSideBar = element(by.xpath('//span[text()="Boards"]/parent::a/parent::li'));
    }

    /**
     * Method show boards on content with board button on Left Sidebar.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     *
     */
    showBoardsWithLeftSideBarButton() {
        return commonActions.clickElement(this.boardsButtonOnLeftSideBar);
    }
}

module.exports = new BoardLeftSideBar();

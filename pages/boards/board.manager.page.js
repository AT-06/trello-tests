'use strict';
const Manager = require('../manager.page');
const commonActions = require('../../util/commons');

/**
 * Page Object of Account Content.
 */
class BoardManager extends Manager {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        super();

        this.boardName = element(by.className('board-header-btn board-header-btn-name js-rename-board'));
        this.boardNameTextField = element(by.className('js-board-name js-autofocus'));
        this.boardRenameButton = element(by.className('primary wide js-rename-board'));
        this.closeBoardLink = element(by.className('board-menu-navigation-item-link js-close-board'));
        this.redDeleteButton = element(by.className('js-confirm full negate'));
        this.deleteConfirmLink = element(by.className('quiet js-delete'));
    }

    /**
     * Method to click on board name to edit.
     * @returns {Promise.<TResult>} Promise.
     */
    clickOnBoardName() {
        return commonActions.clickElement(this.boardName);
    }

    /**
     * Method to click on reName button.
     * @returns {Promise.<TResult>} Promise.
     */
    clickOnRenameButton() {
        return commonActions.clickElement(this.boardRenameButton);
    }

    /**
     * Method to set board name Input Field.
     * @param nameOfBoard name to new board.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    setNameBoardTextField(nameOfBoard) {
        return commonActions.setElementValues(this.boardNameTextField, nameOfBoard);
    }

    /**
     * Method to click on "Close Board" link to delete a board.
     * @returns {Promise.<TResult>} Promise.
     */
    clickOnCloseBoardLink() {
        return commonActions.clickElement(this.closeBoardLink);
    }

    /**
     * Method to click to confirm delete a board permanently.
     * @returns {Promise.<TResult>} Promise.
     */
    clickOnDeleteConfirmLink() {
        return commonActions.clickElement(this.deleteConfirmLink);
    }

    /**
     * Method to click on close button to delete a board.
     * @returns {Promise.<TResult>} Promise.
     */
    clickOnCloseBoardButton() {
        return commonActions.clickElement(this.redDeleteButton);
    }

    /**
     * Method to get name on board page.
     * @returns {promise.Promise<any>} Promise.
     */
    isNameOnBoardEqualTo(nameToVerify) {
        return commonActions.isElementContainsText(this.boardName, nameToVerify);
    }

    /**
     * Method to update board name on board page.
     * @param nameOfBoard name to new board.
     * @returns {Promise<TResult>} Promise.
     */
    updateBoardName(nameOfBoard) {
        return this.clickOnBoardName()
            .then(() => this.setNameBoardTextField(nameOfBoard))
            .then(() => this.clickOnRenameButton());
    }

    /**
     * Method to delete board on board page.
     * @param nameOfBoard name to new board.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    deleteBoard() {
        return this.showMoreOptions()
            .then(() => this.clickOnCloseBoardLink())
            .then(() => this.clickOnCloseBoardButton())
            .then(() => this.clickOnDeleteConfirmLink())
            .then(() => this.clickOnCloseBoardButton());
    }

}

module.exports = new BoardManager();

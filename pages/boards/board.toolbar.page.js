'use strict';
const Toolbar = require('../toolbar.page');
const boardModal = require('../boards/board.modal');
const commonActions = require('../../util/commonActions');
const format = require('string-format');

/**
 * Page Object of Account Content.
 */
class BoardToolBar extends Toolbar {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        super();
        this.boardMenu = {
            boardButtonOnLeftToolBar: element(By.xpath('//div[@class="header-boards-button"]/child::a')),
            createBoard: element(By.className('quiet-button js-add-board')),
            boardOnList: '//span[@title="{}"]/parent::span[contains(@class,"compact-board")]'
        };

        this.createBoardOnPlusMenu = element(By.className('js-new-board'));
    }

    /**
     * Method to click on create link at board menu.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    clickOnCreateBoardAtBoardMenu() {
        return commonActions.clickElement(this.boardMenu.createBoard);
    }

    /**
     * Method to click to create board on plus menu.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    clickOnCreateBoardAtPlusMenu() {
        return commonActions.clickElement(this.createBoardOnPlusMenu);
    }

    /**
     * Method to click on create board button.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    clickOnBoardButton() {
        return commonActions.clickElement(this.boardMenu.boardButtonOnLeftToolBar);
    }

    /**
     * Method to select and click a board from list.
     * @returns {promise.Promise<any>} Promise.
     */
    clickOnBoardAtList(boardName) {
        let selection = format(this.boardMenu.boardOnList, boardName);
        return commonActions.clickOnLastElementOfList(selection);
    }

    /**
     * Method add new Board with plus button on right Toolbar.
     * @param nameOfBoard name to new board.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    addBoardWithRightPlusButton(nameOfBoard) {
        return this.clickOnPlusButton()
            .then(() => this.clickOnCreateBoardAtPlusMenu())
            .then(() => boardModal.createBoard(nameOfBoard));
    }

    /**
     * Method add new Board with board button on left Toolbar.
     * @param nameOfBoard name to new board.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    addBoardWithLeftBoardButton(nameOfBoard) {
        return this.clickOnBoardButton()
            .then(() => this.clickOnCreateBoardAtBoardMenu())
            .then(() => boardModal.createBoard(nameOfBoard));
    }

    /**
     * Method to select a board with board button on toolbar.
     * @param nameOfBoard name to new board.
     * @returns {promise.Promise<any>} Promise.
     */
    selectBoardWithToolBar(nameOfBoard) {
        return this.clickOnBoardButton()
            .then(() => this.clickOnBoardAtList(nameOfBoard));
    }
}

module.exports = new BoardToolBar();

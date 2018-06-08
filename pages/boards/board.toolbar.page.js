'use strict';
const Toolbar = require('../toolbar.page');
const commonActions = require('../../util/commons');
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
            boardButtonOnLeftToolBar: element(by.xpath('//div[@class="header-boards-button"]/child::a')),
            createBoard: element(by.className('quiet-button js-add-board')),
            boardOnList: '//span[@title="{}"]'
        };
        this.addBoardModal = {
            name: element(by.className('subtle-input')),
            createButton: element(by.xpath('//button[@class="primary"]'))
        };
        this.createBoardOnPlusMenu = element(by.className('js-new-board'));

    }

    /**
     * Method to set name board textField Input Field.
     * @param nameOfBoard name of new board.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    setBoardNameTextField(nameOfBoard) {
        return commonActions.clickElement(this.addBoardModal.name)
            .then(() => commonActions.setElementValues(this.addBoardModal.name, nameOfBoard));
    }

    /**
     * Method to click on create link at board menu.
     * @returns {Promise.<TResult>} Promise.
     */
    clickOnCreateBoardAtBoardMenu() {
        return commonActions.clickElement(this.boardMenu.createBoard);
    }

    /**
     * Method to click to create board on plus menu.
     * @returns {Promise.<TResult>} Promise.
     */
    clickOnCreateBoardAtPlusMenu() {
        return commonActions.clickElement(this.createBoardOnPlusMenu);
    }

    /**
     * Method to click on create board button.
     * @returns {Promise.<TResult>} Promise.
     */
    clickOnCreateBoardButton() {
        return commonActions.clickElement(this.addBoardModal.createButton);
    }

    /**
     * Method to click on create board button.
     * @returns {Promise.<TResult>} Promise.
     */
    clickOnBoardButton() {
        return commonActions.clickElement(this.boardMenu.boardButtonOnLeftToolBar);
    }

    /**
     * Method to select and click a board from list.
     * @returns {Promise.<TResult>} Promise.
     */
    clickOnBoardAtList(boardName) {
        let selection = format(this.boardMenu.boardOnList, boardName);
        return commonActions.clickElement(element(by.xpath(selection)));
    }

    /**
     * Method add new Board with plus button on right Toolbar.
     * @param nameOfBoard name to new board.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    addBoardWithRightPlusButton(nameOfBoard) {
        return this.clickOnPlusButton()
            .then(() => this.clickOnCreateBoardAtPlusMenu())
            .then(() => this.setBoardNameTextField(nameOfBoard))
            .then(() => this.clickOnCreateBoardButton());
    }

    /**
     * Method add new Board with board button on left Toolbar.
     * @param nameOfBoard name to new board.
     * @returns {Promise<TResult>} Promise.
     */
    addBoardWithLeftBoardButton(nameOfBoard) {
        return this.clickOnBoardButton()
            .then(() => this.clickOnCreateBoardAtBoardMenu())
            .then(() => this.setBoardNameTextField(nameOfBoard))
            .then(() => this.clickOnCreateBoardButton());
    }

    /**
     * Method to select a board with board button on toolbar.
     * @param nameOfBoard name to new board.
     * @returns {Promise<TResult>} Promise.
     */
    selectBoardWithToolBar(nameOfBoard) {
        return this.clickOnBoardButton()
            .then(() => this.clickOnBoardAtList(nameOfBoard));
    }

}

module.exports = new BoardToolBar();

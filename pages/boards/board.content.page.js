'use strict';
const boardModal = require('../boards/board.modal');
const commonActions = require('../../util/commonActions');
const format = require('string-format');
/**
 * Page Object of Account Content.
 */
class BoardContent {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.boardOnContent = '//span[@class="board-tile-details is-badged"]/child::span[@title="{}"]';
        this.createBoardButton
            = element(By.xpath('//h3[text()="Personal Boards"]/parent::div/following-sibling::ul/descendant::span[contains(text(),"Create new board")]'));
        this.boardList = element(By.className('boards-page-board-section-list'));
        // We cannot improve this selector because it has other similar when you will have a
        // team and the flag is h3[text()="Personal Boards"].
    }

    /**
     * Method to verify if board exist at board list on content.
     * @returns {promise.Promise<any>} Promise.
     */
    isBoardPresentOnContent(nameToVerify) {
        let locator = format(this.boardOnContent, nameToVerify);
        return commonActions.isElementPresentOnList(element(By.xpath(locator)), this.boardList);
    }

    /**
     * Method to click on create board button.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    clickOnBoardButton() {
        return commonActions.clickElement(this.createBoardButton);
    }

    /**
     * Method add new Board with board button on content.
     * @param nameOfBoard name to new board.
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    addBoardWithContentBoardButton(nameOfBoard) {
        return this.clickOnBoardButton()
            .then(() => boardModal.createBoard(nameOfBoard));
    }

    /**
     * Method to select and click to board on content.
     * @param nameOfBoard name to new board.
     * @returns {promise.Promise<any>} Promise.
     */
    selectBoardOnContent(nameOfBoard) {
        return commonActions.clickOnLastElementOfList(format(this.boardOnContent, nameOfBoard));
    }
}

module.exports = new BoardContent();

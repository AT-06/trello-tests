'use strict';
const commonActions = require('../../util/commons');

/**
 * Page Object of Account Content.
 */
class BoardModal {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.modal = {
            name: element(By.className('subtle-input')),
            createButton: element(By.xpath('//button[@class="primary"]'))
        };

    }

    /**
     * Method to set name board textField Input Field.
     * @param nameOfBoard name of new board.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    setBoardNameTextField(nameOfBoard) {
        return commonActions.clickElement(this.modal.name)
            .then(() => commonActions.setElementValues(this.modal.name, nameOfBoard));
    }

    /**
     * Method to click on create board button.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    clickOnCreateBoardButton() {
        return commonActions.clickElement(this.modal.createButton);
    }

    /**
     * Method to add board with modal.
     * @param nameOfBoard
     * @returns {promise.Promise<Promise<TResult>>} Promise.
     */
    createBoard(nameOfBoard) {
        return this.setBoardNameTextField(nameOfBoard)
            .then(() => this.clickOnCreateBoardButton());
    }

}

module.exports = new BoardModal();

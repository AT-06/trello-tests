'use strict';
const Content = require('../manager.page');
const commonActions = require('../../util/commons');
const format = require('string-format');
/**
 * Page Object of Account Content.
 */
class BoardContent extends Content {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        super();

        this.boardOnContent = '//span[@class="board-tile-details is-badged"]/child::span[text()="{}"]';
    }

    /**
     * Method to verify if board exist at board list on content.
     * @returns {promise.Promise<any>} Promise.
     */
    isBoardOnContentEqualTo(nameToVerify) {
        let locator = format(this.boardOnContent,nameToVerify);
        return commonActions.isElementContainsText(element(By.xpath(locator)), nameToVerify);
    }

}

module.exports = new BoardContent();

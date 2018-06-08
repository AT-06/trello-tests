const loginPage = require('../../pages/login.page');
const boards = require('../../pages/boards/board.manager.page');
const toolBar = require('../../pages/boards/board.toolbar.page');
const leftSideBar = require('../../pages/boards/board.leftsidebar.page');
const content = require('../../pages/boards/board.content.page');
const config = require('../../config.json');
const expect = require('chai').expect;

describe('Delete Board', function () {

    let boardToDelete = 'Board To Delete';

    beforeEach(async () => {
        await loginPage.loginAccount(config.email, config.password);
        await toolBar.addBoardWithRightPlusButton(boardToDelete);
        let expected = await boards.isNameOnBoardEqualTo(boardToDelete);
        //  expect(expectedBoardCreated).to.be.true;
    });

    it('Delete one Board has been created before', async function () {
        await toolBar.goHomePage();
        await toolBar.selectBoardWithToolBar(boardToDelete);
        await boards.deleteBoard();
        await toolBar.goHomePage();
        await leftSideBar.showBoardsWithLeftSideBarButton();
        let expectedOnContent = await content.isBoardOnContentEqualTo(boardToDelete);
        expect(expectedOnContent).to.be.false;
    });
});

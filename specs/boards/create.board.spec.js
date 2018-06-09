const loginPage = require('../../pages/login.page');
const boards = require('../../pages/boards/board.manager.page');
const toolBar = require('../../pages/boards/board.toolbar.page');
const leftSideBar = require('../../pages/boards/board.leftsidebar.page');
const content = require('../../pages/boards/board.content.page');
const config = require('../../config.json');
let expect = require('chai').expect;

describe('[Create Board Feature]', function () {

    this.retries(3)                                                                                                                                                                                                                                                                                                                                                                                 ;

    let boardName = 'Board Test';

    beforeEach(async () => {
        await loginPage.loginAccount(config.email, config.password);
    });

    afterEach(async () => {
        await toolBar.goHomePage();
        await toolBar.selectBoardWithToolBar(boardName);
        await boards.deleteBoard();
    });

    it('Create Board with Plus Button on Right Toolbar', async function () {
        await toolBar.goHomePage();
        await toolBar.addBoardWithRightPlusButton(boardName);
        let expectedWithPlusButton = await boards.isNameOnBoardEqualTo(boardName);
        expect(expectedWithPlusButton).to.be.true;
    });

    it('Create Board with Board Button on Left Toolbar', async function () {
        await toolBar.goHomePage();
        await toolBar.addBoardWithLeftBoardButton(boardName);
        let expectedWithBoardButton = await boards.isNameOnBoardEqualTo(boardName);
        expect(expectedWithBoardButton).to.be.true;
    });

    it('Create Board with Board Button on Left SideBar', async function () {
        await toolBar.goHomePage();
        await leftSideBar.showBoardsWithLeftSideBarButton();
        await content.addBoardWithContentBoardButton(boardName);
        let expectedWithBoardButton = await boards.isNameOnBoardEqualTo(boardName);
        expect(expectedWithBoardButton).to.be.true;
    });
});

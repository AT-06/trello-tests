const loginPage = require('../../pages/login.page');
const boards = require('../../pages/boards/board.manager.page');
const toolBar = require('../../pages/boards/board.toolbar.page');
const leftSideBar = require('../../pages/boards/board.leftsidebar.page');
const content = require('../../pages/boards/board.content.page');
const async = require('asyncawait/async');

describe('[Create Board Feature] #Boards', function () {

    this.retries(1);

    let boardName = 'Board Test';

    beforeEach(async function () {
        await loginPage.loginAccount(login.email, login.password);
        await toolBar.goHomePage();
    });

    afterEach(async function () {
        await toolBar.goHomePage();
        await leftSideBar.showBoardsWithLeftSideBarButton();
        await content.selectBoardOnContent(boardName);
        await boards.deleteBoard();
    });

    it('Create Board with Plus Button on Right Toolbar #Acceptance', async function () {
        await toolBar.addBoardWithRightPlusButton(boardName);
        let expectedWithPlusButton = await boards.isBoardNamePresentOnManagerPage(boardName);
        expect(expectedWithPlusButton).to.be.true;
    });

    it('Create Board with Board Button on Left Toolbar #Acceptance', async function () {
        await toolBar.addBoardWithLeftBoardButton(boardName);
        let expectedWithBoardButton = await boards.isBoardNamePresentOnManagerPage(boardName);
        expect(expectedWithBoardButton).to.be.true;
    });

    it('Create Board with Board Button on Left SideBar #Acceptance', async function () {
        await leftSideBar.showBoardsWithLeftSideBarButton();
        await content.addBoardWithContentBoardButton(boardName);
        let expectedWithBoardButton = await boards.isBoardNamePresentOnManagerPage(boardName);
        expect(expectedWithBoardButton).to.be.true;
    });
});

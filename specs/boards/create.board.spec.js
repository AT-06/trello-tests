const loginPage = require('../../pages/login.page');
const boards = require('../../pages/boards/board.manager.page');
const toolBar = require('../../pages/boards/board.toolbar.page');
const leftSideBar = require('../../pages/boards/board.leftsidebar.page');
const content = require('../../pages/boards/board.content.page');


describe('[Create Board Feature]', function () {

    this.retries(1)                                                                                                                                                                                                                                                                                                                                                                                 ;

    let boardName = 'Board Test';

    beforeEach(async () => {
        await loginPage.loginAccount(login.email, login.password);
        await toolBar.goHomePage();
    });

    afterEach(async () => {
        await toolBar.goHomePage();
        await leftSideBar.showBoardsWithLeftSideBarButton();
        await content.selectBoardOnContent(boardName);
        await boards.deleteBoard();
    });

    it('Create Board with Plus Button on Right Toolbar', async function () {
        await toolBar.addBoardWithRightPlusButton(boardName);
        let expectedWithPlusButton = await boards.isBoardNamePresentOnManagerPage(boardName);
        expect(expectedWithPlusButton).to.be.true;
    });

    it('Create Board with Board Button on Left Toolbar', async function () {
        await toolBar.addBoardWithLeftBoardButton(boardName);
        let expectedWithBoardButton = await boards.isBoardNamePresentOnManagerPage(boardName);
        expect(expectedWithBoardButton).to.be.true;
    });

    it('Create Board with Board Button on Left SideBar', async function () {
        await leftSideBar.showBoardsWithLeftSideBarButton();
        await content.addBoardWithContentBoardButton(boardName);
        let expectedWithBoardButton = await boards.isBoardNamePresentOnManagerPage(boardName);
        expect(expectedWithBoardButton).to.be.true;
    });
});

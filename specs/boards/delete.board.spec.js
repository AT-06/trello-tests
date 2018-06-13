const loginPage = require('../../pages/login.page');
const boards = require('../../pages/boards/board.manager.page');
const toolBar = require('../../pages/boards/board.toolbar.page');
const leftSideBar = require('../../pages/boards/board.leftsidebar.page');
const content = require('../../pages/boards/board.content.page');

describe('[Delete Board Feature] #Boards', function () {

    this.retries(1);

    let boardToDelete = 'Board To Delete';

    beforeEach(async function () {
        await loginPage.loginAccount(login.email, login.password);
        await toolBar.addBoardWithRightPlusButton(boardToDelete);
        let expectedBoardCreated = await boards.isBoardNamePresentOnManagerPage(boardToDelete);
        expect(expectedBoardCreated).to.be.true;
        await toolBar.goHomePage();

    });

    it('Delete Board button on left Toolbar, has been created before #Acceptance', async function () {
        await toolBar.selectBoardWithToolBar(boardToDelete);
        await boards.deleteBoard();
        await toolBar.goHomePage();
        await leftSideBar.showBoardsWithLeftSideBarButton();
        let expectedOnContent = await content.isBoardPresentOnContent(boardToDelete);
        expect(expectedOnContent).to.be.false;
    });

    it('Delete Board with button on Left Sidebar, has been created before #Acceptance', async function () {
        await leftSideBar.showBoardsWithLeftSideBarButton();
        await content.selectBoardOnContent(boardToDelete);
        await boards.deleteBoard();
        await toolBar.goHomePage();
        await leftSideBar.showBoardsWithLeftSideBarButton();
        let expectedOnContent = await content.isBoardPresentOnContent(boardToDelete);
        expect(expectedOnContent).to.be.false;
    });
});

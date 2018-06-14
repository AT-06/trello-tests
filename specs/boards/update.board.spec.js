const boards = require('../../pages/boards/board.manager.page');
const toolBar = require('../../pages/boards/board.toolbar.page');
const leftSideBar = require('../../pages/boards/board.leftsidebar.page');
const content = require('../../pages/boards/board.content.page');

describe('[Update Board Feature] #Boards', function () {

    this.retries(1);

    let boardToUpdate = 'Board To Update';
    let boardUpdated = 'Board Updated';

    beforeEach(async function () {
        await loginPage.loginAccount(login.email, login.password);
        await toolBar.addBoardWithRightPlusButton(boardToUpdate);
        await toolBar.goHomePage();
    });

    afterEach(async function () {
        await toolBar.goHomePage();
        await leftSideBar.showBoardsWithLeftSideBarButton();
        await content.selectBoardOnContent(boardUpdated);
        await boards.deleteBoard();
    });

    it('Update a Board with button on left Toolbar, has been created before #Acceptance', async function () {
        await toolBar.selectBoardWithToolBar(boardToUpdate);
        await boards.updateBoardName(boardUpdated);
        let expectedOnBoards = await boards.isBoardNamePresentOnManagerPage(boardUpdated);
        expect(expectedOnBoards).to.be.true;

        await toolBar.goHomePage();
        await leftSideBar.showBoardsWithLeftSideBarButton();
        let expectedOnContent = await content.isBoardPresentOnContent(boardUpdated);
        expect(expectedOnContent).to.be.true;
    });

    it('Update a Board with button on Left Sidebar, has been created before #Acceptance', async function () {
        await leftSideBar.showBoardsWithLeftSideBarButton();
        await content.selectBoardOnContent(boardToUpdate);
        await boards.updateBoardName(boardUpdated);
        let expectedOnBoards = await boards.isBoardNamePresentOnManagerPage(boardUpdated);
        expect(expectedOnBoards).to.be.true;

        await toolBar.goHomePage();
        await leftSideBar.showBoardsWithLeftSideBarButton();
        let expectedOnContent = await content.isBoardPresentOnContent(boardUpdated);
        expect(expectedOnContent).to.be.true;
    });

});

const loginPage = require('../../pages/login.page');
const boards = require('../../pages/boards/board.manager.page');
const toolBar = require('../../pages/boards/board.toolbar.page');
const leftSideBar = require('../../pages/boards/board.leftsidebar.page');
const content = require('../../pages/boards/board.content.page');
const config = require('../../config.json');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.use(chaiAsPromised).expect;

describe('[Update Board Feature]', function () {

    this.retries(3);

    let boardToUpdate = 'Board To Update';
    let boardUpdated = 'Board Updated';

    beforeEach(async () => {
        await loginPage.loginAccount(config.email, config.password);
        await toolBar.addBoardWithRightPlusButton(boardToUpdate);
        let expectedBoardCreated = await boards.isNameOnBoardEqualTo(boardToUpdate);
        expect(expectedBoardCreated).to.be.true;
    });

    afterEach(async () => {
        await toolBar.goHomePage();
        await toolBar.selectBoardWithToolBar(boardUpdated);
        await boards.deleteBoard();
    });

    it('Update a Board with button on left Toolbar, has been created before', async function () {
        await toolBar.goHomePage();
        await toolBar.selectBoardWithToolBar(boardToUpdate);
        await boards.updateBoardName(boardUpdated);
        let expectedOnBoards = await boards.isNameOnBoardEqualTo(boardUpdated);
        expect(expectedOnBoards).to.be.true;

        await toolBar.goHomePage();
        await leftSideBar.showBoardsWithLeftSideBarButton();
        let expectedOnContent = await content.isBoardOnContentEqualTo(boardUpdated);
        expect(expectedOnContent).to.be.true;
    });

    it('Update a Board with button on Left Sidebar, has been created before', async function () {
        await toolBar.goHomePage();
        await leftSideBar.showBoardsWithLeftSideBarButton();
        await content.selectBoardOnContent(boardToUpdate);
        await boards.updateBoardName(boardUpdated);
        let expectedOnBoards = await boards.isNameOnBoardEqualTo(boardUpdated);
        expect(expectedOnBoards).to.be.true;

        await toolBar.goHomePage();
        await leftSideBar.showBoardsWithLeftSideBarButton();
        let expectedOnContent = await content.isBoardOnContentEqualTo(boardUpdated);
        expect(expectedOnContent).to.be.true;
    });

});

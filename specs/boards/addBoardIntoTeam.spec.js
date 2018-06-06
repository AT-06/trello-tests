let loginPage = require('../../pages/LoginPage');
let content = require('../../pages/ContentPage');
let settingMenu = require('../../pages/SettingsMenu');
let boards = require('../../pages/BoardsPage');
let toolBar = require('../../pages/ToolBarPage');
let expect = require('chai').expect;
let config = require('../../config.json');

describe('Add a Board', function () {
    let group = {
        nameGroup: 'Team to Test',
        descriptionTeam: 'description about team to delete',
        groupToDelete: 'Team to Test',
        nameBoard: 'BoardTestsNew'
    };

    beforeEach(function () {
        loginPage.loginAccount(config.email, config.password);
        toolBar.addQuickTeamSinceToolbar(group.nameGroup, group.descriptionTeam);
        toolBar.clickReturnButton();
    });

    afterEach(function () {
        /*toolBar.clickReturnButton();
        content.selectGroup(group.groupToDelete);
        settingMenu.deleteGroupSettingsMenu();*/
    });

    it('Add a Board', async function () {
        content.addBoard(group.nameBoard, group.nameGroup);
        // expect(await content.checkBoard(group.nameGroup, group.nameBoard)).to.have.equal(group.nameBoard);
        //expect(await boards.getNameBoard()).to.have.equal(group.nameBoard);
    });
});

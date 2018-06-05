let loginPage = require('../pages/LoginPage');
let leftSideBar = require('../pages/LeftSideBar');
let content = require('../pages/ContentPage');
let settingMenu = require('../pages/SettingsMenu');
let boards = require('../pages/BoardsPage');
let expect = require('chai').expect;
let config = require('../config.json');

describe('Add a Board', function () {
    let group = {
        nameGroup: 'Team to Test',
        descriptionTeam: 'description about team to delete',
        groupToDelete: 'Team to Test',
        nameBoard: 'BoardTests'
    };

    beforeEach(function () {
        loginPage.loginAccount(config.email, config.password);
        leftSideBar.addQuickTeam(group.nameGroup, group.descriptionTeam);
        loginPage.sendHome();
    });

    afterEach(function () {
        loginPage.sendHome();
        content.selectGroup(group.groupToDelete);
        settingMenu.deleteGroupSettingsMenu();
    });

    it('Add a Board', async function () {
        content.addBoard(group.nameBoard, group.nameGroup);
        expect(await content.checkBoard(group.nameGroup, group.nameBoard)).to.have.equal(group.nameBoard);
    });
});

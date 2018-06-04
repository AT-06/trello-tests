let loginPage = require('../pages/LoginPage');
let leftSideBar = require('../pages/LeftSideBar');
let boardsMenu = require('../pages/BoardsMenu');
let expect = require('chai').expect;
let config = require('../config.json');

describe('Add a Board', function () {
    let group = {
        nameGroup: 'Team to Test',
        descriptionTeam: 'description about team to delete',
        groupToDelete: 'Team to Test'
    };

    beforeEach(function () {
        loginPage.loginAccount(config.email, config.password);
        leftSideBar.addQuickTeam(group.nameGroup, group.descriptionTeam);
        loginPage.sendHome();
    });

    afterEach(function () {
        loginPage.sendHome();
        boardsMenu.selectGroup(group.groupToDelete);
    });

    it('Add a Board', function () {
        boardsMenu.addBoard(group.groupToDelete, group.nameGroup);

    });
});

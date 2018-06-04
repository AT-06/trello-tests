let loginPage = require('../pages/LoginPage');
let leftSideBar = require('../pages/LeftSideBar');
let boardsMenu = require('../pages/BoardsMenu');
let expect = require('chai').expect;
let config = require('../config.json');

describe('Add a new Group', function () {

    let group = {
        nameGroup: 'Team Creation Test',
        descriptionTeam: 'description about team1',
        groupToDelete: 'Team Creation Test'
    };

    beforeEach(function () {
        loginPage.loginAccount(config.email, config.password);
    });

    afterEach(function () {
        loginPage.sendHome();
        boardsMenu.selectGroup(group.groupToDelete);
    });

    /*it('Create a group', function () {
        leftSideBar.addTeam(group.nameGroup, group.descriptionTeam);
    });*/

    it('Create a quick group', function () {
        leftSideBar.addQuickTeam(group.nameGroup, group.descriptionTeam);

    });
});

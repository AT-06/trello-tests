let loginPage = require('../pages/LoginPage');
let leftSideBar = require('../pages/LeftSideBar');
let boardsMenu = require('../pages/ContentPage');
let settingMenu = require('../pages/SettingsMenu');
let expect = require('chai').expect;
let config = require('../config');

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
        settingMenu.deleteGroupSettingsMenu();
    });

    /*it('Create a group', async function () {
        leftSideBar.addTeam(group.nameGroup, group.descriptionTeam);
        expect(await settingMenu.getNameGroup()).to.have.equal(group.nameGroup);
    });*/

    it('Create a quick group', async function () {
        leftSideBar.addQuickTeam(group.nameGroup, group.descriptionTeam);
        expect(await settingMenu.getNameGroup()).to.have.equal(group.nameGroup);
    });
});

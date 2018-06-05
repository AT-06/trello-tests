let loginPage = require('../pages/LoginPage');
let leftSideBar = require('../pages/LeftSideBar');
let content = require('../pages/ContentPage');
let settingMenu = require('../pages/SettingsMenu');
let expect = require('chai').expect;
let config = require('../config.json');

describe('Edit a Group', function () {
    let group = {
        nameGroup: 'Team to Delete',
        descriptionTeam: 'description about team to delete',
        groupToDelete: 'Team to Delete',
        newName: 'NewEditGroup'
    };

    beforeEach(function () {
        loginPage.loginAccount(config.email, config.password);
        leftSideBar.addQuickTeam(group.nameGroup, group.descriptionTeam);
        loginPage.sendHome();
    });

    afterEach(function () {
        //settingMenu.clickBackButton();
        loginPage.sendHome();
        content.selectGroup(group.groupToDelete);
        settingMenu.deleteGroupSettingsMenu();
    });

    it('Edit a group', async function () {
        content.selectGroup(group.groupToDelete);
        settingMenu.editGroup(group.newName);
        expect(await settingMenu.getNameGroup()).to.have.equal(group.newName);
        //  settingMenu.deleteGroupSettingsMenu();
    });
});

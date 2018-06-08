let loginPage = require('../../pages/login.page');
let content = require('../../pages/content.page');
let settingMenu = require('../../pages/SettingsMenu');
let toolBar = require('../../pages/toolbar.page');
let expect = require('chai').expect;
let config = require('../../config.json');

describe('Edit a Group', function () {
    let group = {
        nameGroup: 'Team to Delete',
        descriptionTeam: 'description about team to delete',
        groupToDelete: 'Team to Delete',
        newName: 'NewEditGroup'
    };

    beforeEach(function () {
        loginPage.loginAccount(config.email, config.password);
        toolBar.addQuickTeamSinceToolbar(group.nameGroup, group.descriptionTeam);
        toolBar.clickReturnButton();
    });

    afterEach(function () {
        toolBar.clickReturnButton();
        content.selectGroup(group.newName);
        settingMenu.deleteGroupSettingsMenu();
    });
    it('Edit a group', async function () {
        content.selectGroup(group.groupToDelete);
        settingMenu.editGroup(group.newName);
        expect(await settingMenu.isTeamNameSameToCreated()).to.have.equal(group.newName);
    });
});

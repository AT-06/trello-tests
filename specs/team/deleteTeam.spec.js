let loginPage = require('../../pages/LoginPage');
let leftSideBar = require('../../pages/LeftSideBar');
let content = require('../../pages/ContentPage');
let settingMenu = require('../../pages/SettingsMenu');
let toolBar = require('../../pages/ToolBarPage');
let expect = require('chai').expect;
let config = require('../../config.json');

describe('Delete a Group', function () {
    let group = {
        nameGroup: 'Team to Delete',
        descriptionTeam: 'description about team to delete',
        groupToDelete: 'Team to Delete'
    };

    beforeEach(function () {
        loginPage.loginAccount(config.email, config.password);
        toolBar.addQuickTeamSinceToolbar(group.nameGroup, group.descriptionTeam);
        loginPage.sendHome();
    });

    it('Delete a group', async function () {
        content.selectGroup(group.groupToDelete);
        settingMenu.deleteGroupSettingsMenu();
        expect(await content.checkNameTeam(group.groupToDelete)).to.not.have.equal(group.groupToDelete);
    });
});

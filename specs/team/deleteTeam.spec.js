let loginPage = require('../../pages/login.page');
let leftSideBar = require('../../pages/leftsidebar.page');
let content = require('../../pages/content.page');
let settingMenu = require('../../pages/SettingsMenu');
let toolBar = require('../../pages/toolbar.page');
let expect = require('chai').expect;
let config = require('../../config.json');

describe('Delete a Group', function () {
    let group = {
        nameGroup: 'Team to Delete',
        descriptionTeam: 'description about team to delete',
        groupToDelete: 'Team to Delete'
    };

    beforeEach(async function () {
        await loginPage.loginAccount(config.email, config.password);
        await toolBar.addQuickTeamSinceToolbar(group.nameGroup, group.descriptionTeam);
        await toolBar.clickReturnButton();
    });

    it('Delete a group', async function () {
        await content.selectGroup(group.groupToDelete);
        await settingMenu.deleteGroupSettingsMenu();
        expect(content.checkNameTeam(group.groupToDelete)).to.not.have.equal(true);
    });
});

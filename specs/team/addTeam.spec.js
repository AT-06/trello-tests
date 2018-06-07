let loginPage = require('../../pages/LoginPage');
let leftSideBar = require('../../pages/LeftSideBar');
let boardsMenu = require('../../pages/ContentPage');
let settingMenu = require('../../pages/SettingsMenu');
let toolBar = require('../../pages/ToolBarPage');
let expect = require('chai').expect;
let config = require('../../config');

describe('Add a new Team', function () {

    let group = {
        nameGroup: 'Team Creation Test',
        descriptionTeam: 'description about team',
        groupToDelete: 'Team Creation Test'
    };

    beforeEach(async () => {
        await loginPage.loginAccount(config.email, config.password);
    });

    // afterEach(function () {
    //     toolBar.clickReturnButton();
    //     boardsMenu.selectGroup(group.groupToDelete);
    //     settingMenu.deleteGroupSettingsMenu();
    // });
    it('Create a Team', async () => {
        await leftSideBar.addTeam(group.nameGroup, group.descriptionTeam);
        let text = await settingMenu.getNameGroup(group.nameGroup);
        console.log("text:" + text);
        // expect(await settingMenu.getNameGroup()).to.have.equal(group.nameGroup);
    });

    // it('Create a quick Team', async function () {
    //     toolBar.addQuickTeamSinceToolbar(group.nameGroup, group.descriptionTeam);
    //     expect(await settingMenu.getNameGroup()).to.have.equal(group.nameGroup);
    // });
});

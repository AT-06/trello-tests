let loginPage = require('../../pages/login.page');
let leftSideBar = require('../../pages/LeftSideBar.js');
let boardsMenu = require('../../pages/content.page');
let settingMenu = require('../../pages/SettingsMenu');
let toolBar = require('../../pages/toolbar.page');
let expect = require('chai').expect;
let config = require('../../config');

describe('Add a new Team', function () {

    let team = {
        name: 'Team Creation Test',
        description: 'description about team',
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

    it('Create team from left side bar', async () => {
        await leftSideBar.addTeam(team.name, team.description);
        let isExpectedTeamCreated = await settingMenu.isTeamNameSameToCreated(team.name);
        expect(isExpectedTeamCreated).to.be.true;
    });

    it('Create a quick Team', async () => {
        await toolBar.addTeam(team.name, team.description);
        let isExpectedTeamCreated = await settingMenu.isTeamNameSameToCreated(team.name);
        expect(isExpectedTeamCreated).to.be.true;
    });
});

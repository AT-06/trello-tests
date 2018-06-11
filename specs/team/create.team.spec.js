let loginPage = require('../../pages/login.page');
let leftSideBar = require('../../pages/teams/team.leftsidebar.page');
let settingMenu = require('../../pages/SettingsMenu');
let toolBar = require('../../pages/toolbar.page');
let expect = require('chai').expect;
let config = require('../../config');
let rightSideBar = require('../../pages/rightsidebar.page');
let teamContentPage = require('../../pages/teams/team.content.page');

describe('Add a new Team', function () {

    let team = {
        name: 'Team Creation Test',
        description: 'description about team',
    };

    beforeEach(async () => {
        await loginPage.loginAccount(config.email, config.password);
    });

    afterEach(async () => {
        await toolBar.clickReturnButton();
        await leftSideBar.clickLastTeam(team.name);
        await rightSideBar.goToTeamSettings();
        await teamContentPage.deleteTeam();
    });

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

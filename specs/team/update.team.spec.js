let loginPage = require('../../pages/login.page');
let content = require('../../pages/content.page');
let settingMenu = require('../../pages/SettingsMenu');
let rightSideBar = require('../../pages/rightsidebar.page');
let expect = require('chai').expect;
let toolBar = require('../../pages/toolbar.page');
let config = require('../../config.json');
let leftSideBar = require('../../pages/teams/team.leftsidebar.page');
let teamContentPage = require('../../pages/teams/team.content.page');

describe('Edit a team', function () {
    let team = {
        name: 'Team to Modify',
        description: 'description about team to delete',
        newName: 'Team name Modified'
    };

    beforeEach(async () => {
        await browser.driver.manage().window().maximize();
        await loginPage.loginAccount(config.email, config.password);
        await leftSideBar.addTeam(team.name, team.description);
        await toolBar.clickReturnButton();
    });

    afterEach(async () => {
        await toolBar.clickReturnButton();
        await leftSideBar.clickLastTeam(team.newName);
        await rightSideBar.goToTeamSettings();
        await teamContentPage.deleteTeam();
    });

    it('Edit a team', async () => {
        await leftSideBar.clickLastTeam(team.name);
        await rightSideBar.goToTeamSettings();
        await settingMenu.editGroup(team.newName);
        await toolBar.clickReturnButton();
        await leftSideBar.clickLastTeam(team.newName);
        await rightSideBar.goToTeamSettings();
        let isExpectedTeamModified = await settingMenu.isTeamNameSameToCreated(team.newName);
        expect(isExpectedTeamModified).to.be.true;
    });
});

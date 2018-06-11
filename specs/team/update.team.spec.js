let loginPage = require('../../pages/login.page');
let settingMenu = require('../../pages/settings.page');
let rightSideBar = require('../../pages/rightsidebar.page');
let teamToolBar = require('../../pages/teams/team.toolbar.page');
let leftSideBar = require('../../pages/teams/team.leftsidebar.page');
let teamContentPage = require('../../pages/teams/team.content.page');

describe('Edit a team', function () {
    this.retries(1);

    let team = {
        name: 'Team to Modify',
        description: 'description about team'
    };

    let teamModified = {
        name: 'Team name Modified',
        description: 'description about team modified'
    };

    beforeEach(async () => {
        await loginPage.loginAccount(login.email, login.password);
        await leftSideBar.addTeam(team);
        await teamToolBar.clickReturnButton();
    });

    afterEach(async () => {
        await teamToolBar.clickReturnButton();
        await leftSideBar.clickLastTeam(teamModified.name);
        await rightSideBar.goToTeamSettings();
        await teamContentPage.deleteTeam();
    });

    it('Edit a team', async () => {
        await leftSideBar.clickLastTeam(team.name);
        await rightSideBar.goToTeamSettings();
        await settingMenu.editGroup(teamModified);
        await teamToolBar.clickReturnButton();
        await leftSideBar.clickLastTeam(teamModified.name);
        await rightSideBar.goToTeamSettings();
        let isExpectedTeamModified = await settingMenu.isTeamNameSameToCreated(teamModified.name);
        expect(isExpectedTeamModified).to.be.true;
    });
});

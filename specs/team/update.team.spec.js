let loginPage = require('../../pages/login.page');
let settingMenu = require('../../pages/settings.page');
let rightSideBar = require('../../pages/rightsidebar.page');
let teamToolBar = require('../../pages/teams/team.toolbar.page');
let leftSideBar = require('../../pages/teams/team.leftsidebar.page');
let teamContentPage = require('../../pages/teams/team.content.page');

describe('[Edit a team feature] #Teams', function () {
    this.retries(1);

    let team = {
        name: 'Team to Modify',
        description: 'description about team'
    };

    let teamModified = {
        name: 'Team name Modified',
        description: 'description about team modified'
    };

    beforeEach(async function () {
        await loginPage.loginAccount(login.email, login.password);
        await leftSideBar.addTeam(team);
        await teamToolBar.goHomePage();
        await leftSideBar.clickHomeButton();
    });

    afterEach(async function () {
        await teamToolBar.goHomePage();
        await leftSideBar.clickHomeButton();
        await leftSideBar.clickLastTeam(teamModified.name);
        await rightSideBar.goToTeamSettings();
        await teamContentPage.deleteTeam();
    });

    it('Edit a team name and description #Acceptance', async function () {
        await leftSideBar.clickLastTeam(team.name);
        await rightSideBar.goToTeamSettings();
        await settingMenu.editTeam(teamModified);
        await teamToolBar.goHomePage();
        await leftSideBar.clickHomeButton();
        await leftSideBar.clickLastTeam(teamModified.name);
        await rightSideBar.goToTeamSettings();
        let isExpectedTeamModified = await settingMenu.isTeamNameSameToCreated(teamModified.name);
        expect(isExpectedTeamModified).to.be.true;
    });
});

const loginPage = require('../../pages/login.page');
const settingMenu = require('../../pages/settings.page');
const rightSideBar = require('../../pages/rightsidebar.page');
const teamToolBar = require('../../pages/teams/team.toolbar.page');
const leftSideBar = require('../../pages/teams/team.leftsidebar.page');
const teamContentPage = require('../../pages/teams/team.content.page');
const toolBar = require('../../pages/boards/board.toolbar.page');

describe('[Edit a team feature] #Teams', function () {
    this.retries(1);

    let team = {
        name: 'Team to Modify',
        description: 'description about team'
    };

    let teamModified = {
        name: 'Team name Modified',
        shortName : 'team short name modified',
        website : 'team website modified',
        description: 'description about team modified'
    };

    beforeEach(async function () {
        await loginPage.loginAccount(login.email, login.password);
        await toolBar.goHomePage();
        await leftSideBar.addTeam(team);
        await toolBar.goHomePage();
        await leftSideBar.clickHomeButton();
    });

    afterEach(async function () {
        await toolBar.goHomePage();
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

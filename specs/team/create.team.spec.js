const loginPage = require('../../pages/login.page');
const leftSideBar = require('../../pages/teams/team.leftsidebar.page');
const settingMenu = require('../../pages/settings.page');
const teamToolBar = require('../../pages/teams/team.toolbar.page');
const rightSideBar = require('../../pages/rightsidebar.page');
const teamContentPage = require('../../pages/teams/team.content.page');
const toolBar = require('../../pages/boards/board.toolbar.page');

describe('[Create a Team feature] #Teams', function () {
    this.retries(1);

    let team = {
        name: 'Team Creation Test',
        description: 'description about team'
    };

    beforeEach(async function () {
        await loginPage.loginAccount(login.email, login.password);
        await toolBar.goHomePage();
    });

    afterEach(async function () {
        await toolBar.goHomePage();
        await leftSideBar.clickHomeButton();
        await leftSideBar.clickLastTeam(team.name);
        await rightSideBar.goToTeamSettings();
        await teamContentPage.deleteTeam();
    });

    it('Create team with left side bar #Acceptance', async function () {
        await leftSideBar.addTeam(team);
        let isExpectedTeamCreated = await settingMenu.isTeamNameSameToCreated(team.name);
        expect(isExpectedTeamCreated).to.be.true;
    });

    it('Create team with plus toolbar button #Acceptance', async function () {
        await teamToolBar.addTeam(team);
        let isExpectedTeamCreated = await settingMenu.isTeamNameSameToCreated(team.name);
        expect(isExpectedTeamCreated).to.be.true;
    });
});

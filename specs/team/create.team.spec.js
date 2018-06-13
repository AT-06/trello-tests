const loginPage = require('../../pages/login.page');
const leftSideBar = require('../../pages/teams/team.leftsidebar.page');
const settingMenu = require('../../pages/settings.page');
const teamToolBar = require('../../pages/teams/team.toolbar.page');
const rightSideBar = require('../../pages/rightsidebar.page');
const teamContentPage = require('../../pages/teams/team.content.page');
const toolBar = require('../../pages/boards/board.toolbar.page');

describe('[Create a Team feature]', function () {
    this.retries(1);

    let team = {
        name: 'Team Creation Test',
        description: 'description about team'
    };

    beforeEach(async () => {
        await loginPage.loginAccount(login.email, login.password);
        await toolBar.goHomePage();
    });

    afterEach(async () => {
        await toolBar.goHomePage();
        await leftSideBar.clickHomeButton();
        await leftSideBar.clickLastTeam(team.name);
        await rightSideBar.goToTeamSettings();
        await teamContentPage.deleteTeam();
    });

    it('Create team with left side bar', async function () {
        await leftSideBar.addTeam(team);
        let isExpectedTeamCreated = await settingMenu.isTeamNameSameToCreated(team.name);
        expect(isExpectedTeamCreated).to.be.true;
    });

    it('Create team with plus toolbar button', async function () {
        await teamToolBar.addTeam(team);
        let isExpectedTeamCreated = await settingMenu.isTeamNameSameToCreated(team.name);
        expect(isExpectedTeamCreated).to.be.true;
    });
});

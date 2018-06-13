const loginPage = require('../../pages/login.page');
let leftSideBar = require('../../pages/teams/team.leftsidebar.page');
let settingMenu = require('../../pages/settings.page');
let teamToolBar = require('../../pages/teams/team.toolbar.page');
let rightSideBar = require('../../pages/rightsidebar.page');
let teamContentPage = require('../../pages/teams/team.content.page');

describe('[Create a Team feature] #Teams', function () {
    this.retries(1);

    let team = {
        name: 'Team Creation Test',
        description: 'description about team'
    };

    beforeEach(async () => {
        await loginPage.loginAccount(login.email, login.password);
    });

    afterEach(async () => {
        await teamToolBar.goHomePage();
        await leftSideBar.clickHomeButton();
        await leftSideBar.clickLastTeam(team.name);
        await rightSideBar.goToTeamSettings();
        await teamContentPage.deleteTeam();
    });

    it('Create team with left side bar #Acceptance', async () => {
        await leftSideBar.addTeam(team);
        let isExpectedTeamCreated = await settingMenu.isTeamNameSameToCreated(team.name);
        expect(isExpectedTeamCreated).to.be.true;
    });

    it('Create team with plus toolbar button #Acceptance', async () => {
        await teamToolBar.addTeam(team);
        let isExpectedTeamCreated = await settingMenu.isTeamNameSameToCreated(team.name);
        expect(isExpectedTeamCreated).to.be.true;
    });
});

const loginPage = require('../../pages/login.page');
const leftSideBar = require('../../pages/teams/team.leftsidebar.page');
const rightSideBar = require('../../pages/rightsidebar.page');
const teamContentPage = require('../../pages/teams/team.content.page');
const teamToolBar = require('../../pages/teams/team.toolbar.page');
const toolBar = require('../../pages/boards/board.toolbar.page');

describe('[Delete a Team feature] #Teams', function () {
    this.retries(1);

    let team = {
        name: 'team to test delete',
        description: 'description of team',
    };

    beforeEach(async function () {
        await loginPage.loginAccount(login.email, login.password);
        await toolBar.goHomePage();
        await leftSideBar.addTeam(team);
        await toolBar.goHomePage();
        await leftSideBar.clickHomeButton();
    });

    it('Delete a team #Acceptance', async function () {
        await leftSideBar.clickLastTeam(team.name);
        await rightSideBar.goToTeamSettings();
        await teamContentPage.deleteTeam();
        await teamToolBar.goHomePage();
        await leftSideBar.clickHomeButton();
        expect(leftSideBar.doesTeamExistInLeftSideBar(team.name)).not.to.be.true;
    });
});

let loginPage = require('../../pages/login.page');
let leftSideBar = require('../../pages/teams/team.leftsidebar.page');
let rightSideBar = require('../../pages/rightsidebar.page');
let teamContentPage = require('../../pages/teams/team.content.page');
let teamToolBar = require('../../pages/teams/team.toolbar.page');

describe('Delete a Group', function () {
    this.retries(1);

    let team = {
        name: 'team to test delete',
        description: 'description of team',
    };

    beforeEach(async () => {
        await loginPage.loginAccount(login.email, login.password);
        await leftSideBar.addTeam(team);
        await teamToolBar.clickReturnButton();
    });

    it('Delete a group', async () => {
        await leftSideBar.clickLastTeam(team.name);
        await rightSideBar.goToTeamSettings();
        await teamContentPage.deleteTeam();
        await teamToolBar.goHomePage();
        //expect(leftSideBar.isTeamDeleted(team.name)).to.be.true;
    });
});

let loginPage = require('../../pages/login.page');
let leftSideBar = require('../../pages/teams/team.leftsidebar.page');
let rightSideBar = require('../../pages/rightsidebar.page');
let teamContentPage = require('../../pages/teams/team.content.page');
// let content = require('../../pages/content.page');
let settingMenu = require('../../pages/SettingsMenu');
let toolBar = require('../../pages/toolbar.page');
let expect = require('chai').expect;
let config = require('../../config.json');

describe('Delete a Group', function () {

    let team = {
        name: 'Team Creation Test',
        description: 'description about team',
    };

    beforeEach(async () => {
        await browser.driver.manage().window().maximize();
        await loginPage.loginAccount(config.email, config.password);
        await leftSideBar.addTeam(team.name, team.description);
        await toolBar.clickReturnButton();
    });

    it('Delete a group', async () => {
        await leftSideBar.clickLastTeam(team.name);
        await rightSideBar.goToTeamSettings();
        await teamContentPage.deleteTeam();
        await toolBar.goHomePage();
        //expect(leftSideBar.isTeamDeleted(team.name)).to.be.true;
    });
});

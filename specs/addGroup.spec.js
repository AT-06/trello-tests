let loginPage = require('../pages/LoginPage');
let leftSideBar = require('../pages/LeftSideBar');
let expect = require('chai').expect;
let config = require('../config.json');

describe('Add a new Group', function () {

    let group = {
        nameGroup: 'team1',
        descriptionTeam: 'description about team1'

    };

    beforeEach(function () {
        loginPage.loginAccount(config.email, config.password);
    });

    /*it('Create a group', function () {
        leftSideBar.addTeam(group.nameGroup, group.descriptionTeam);
    });*/

    it('Create a quick group', function () {
        leftSideBar.addQuickTeam(group.nameGroup, group.descriptionTeam);
    });

});

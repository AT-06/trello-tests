let loginPage = require('../pages/LoginPage');
let leftSideBar = require('../pages/LeftSideBar');
let expect = require('chai').expect;
let config = require('../config.json');

describe('Add a new Group', function () {

    beforeEach(function () {
        loginPage.loginAccount(config.email, config.password);
    });

    it('Delete a group', function () {

    });

});
let loginPage = require('../pages/LoginPage');
let expect = require('chai').expect;
let config = require('../config.json');

describe('Add a new Group', function () {
    beforeEach(function () {
        loginPage.loginAccount(config.email, config.password);
    });

    it('Create a group', function () {
        //Add a test
    });
});

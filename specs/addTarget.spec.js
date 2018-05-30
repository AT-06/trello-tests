let loginPage = require('../pages/LoginPage');
let expect = require('chai').expect;
let config = require('../config.json');

describe('Add a new Target', function () {
    it('login', function () {
        loginPage.loginAccount(config.email, config.password);
    });
});

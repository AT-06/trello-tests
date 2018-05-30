let loginPage = require('../pages/LoginPage');
let expect = require('chai').expect;

describe('Add a new Target', function () {
    it('login', function () {
        loginPage.loginAccount('ariel.gonzales@fundacion-jala.org', 'P@ssw0rd');
    });
});

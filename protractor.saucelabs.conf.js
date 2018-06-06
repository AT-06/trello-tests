// saucelabs configs:
let defaults = require('./protractor.conf');
let _ = require('lodash');

var overrides = {
    sauceUser: "TimmyOthull",
    sauceKey: "264bb971-45ef-47e5-b2df-83cca212aeeb",
    sauceConnect: true,

    capabilities: [{
        browserName: 'chrome',
        platformName: 'Windows 10',
        version: '67.0'

    }]
};
exports.config = _.defaultsDeep(overrides, defaults);



const config = require('./config.json');
exports.config = {

    /**
     * A base URL for your application under test. Calls to protractor.get()
     * with relative paths will be resolved against this URL (via url.resolve)
     */
    seleniumAddress: 'http://localhost:4444/wd/hub',

    baseUrl: 'https://trello.com',

    /**
     * Required. Spec patterns are relative to the location of this config.
     */
    specs: [
        './specs/**/*.spec.js'
    ],

    framework: 'mocha',
    /**
     * Protractor can launch your tests on one or more browsers. If you are
     * testing on a single browser, use the capabilities option. If you are
     * testing on multiple browsers, use the multiCapabilities array.
     */
    capabilities: {
        browserName: 'chrome'
    },

    /**
     * The timeout in milliseconds for each` script run on the browser. This
     * should be longer than the maximum time your application needs to
     * stabilize between tasks.
     */

    allScriptsTimeout: 5000,
    /**
     * How long to wait for a page to load.
     */

    getPageTimeout: 10000,
    mochaOpts: {
        ui: 'bdd',
        timeout: 150000
    },

    /**
     * Protractor log level
     *
     * default: INFO
     */
    logLevel: 'ERROR'|'DEBUG',

    /**
     * A callback function called once protractor is ready and available, and
     * before the specs are executed. If multiple capabilities are being run,
     * this will run once per capability.
     *
     * You can specify a file containing code to run by setting onPrepare to
     * the filename string. onPrepare can optionally return a promise, which
     * Protractor will wait for before continuing execution. This can be used if
     * the preparation involves any asynchronous calls, e.g. interacting with
     * the browser. Otherwise Protractor cannot guarantee order of execution
     * and may start the tests before preparation finishes.
     *
     * At this point, global variable 'protractor' object will be set up, and
     * globals from the test framework will be available. For example, if you
     * are using Jasmine, you can add a reporter with:
     *
     *    jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(
     *      'outputdir/', true, true));
     *
     * If you need access back to the current configuration object,
     * use a pattern like the following:
     *
     *    return browser.getProcessedConfig().then(function(config) {
     *      // config.capabilities is the CURRENT capability being run, if      *      // you are using multiCapabilities.
     *      console.log('Executing capability', config.capabilities);
     *    });
     */
    onPrepare: function () {

        // expect to use on tests.
        let chai = require('chai');
        global.expect = chai.expect;

        // Login parameters
        global.login = {
            email: config.email,
            password: config.password
        };

        // Commons
        global.expectedConditions = protractor.ExpectedConditions;
        browser.waitForAngularEnabled(false);

        // Common Page Objects
        global.loginPage = require('./pages/login.page');


    },
};

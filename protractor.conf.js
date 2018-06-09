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
        './specs/**/deleteTeam.spec.js'
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
     * The timeout in milliseconds for each script run on the browser. This
     * should be longer than the maximum time your application needs to
     * stabilize between tasks.
     */

    allScriptsTimeout: 5000,
    /**
     * How long to wait for a page to load.
     */
    getPageTimeout: 10000,
    mochaOpts: {
        reporter: "spec",
        ui: 'bdd',
        timeout: 300000
    }
};

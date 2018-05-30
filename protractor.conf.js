exports.config = {

    framework: 'mocha',
    baseUrl: 'https://trello.com',

    specs: [
        './specs/**/*.spec.js'
    ],
    capabilities: {
        browserName: 'chrome'
    },
    mochaOpts: { // Some reasonable mocha config
        reporter: "spec",
        slow: 3000,
        ui: 'bdd',
        timeout: 30000
    }
}
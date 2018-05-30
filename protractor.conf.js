exports.config = {

    framework: 'mocha',
    baseUrl: 'https://trello.com',

    specs: [
        './specs/**/*.spec.js'
    ],
    capabilities: {
        'browserName': 'chrome'
    }
}
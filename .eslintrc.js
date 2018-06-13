module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "plugins": ["protractor"],
    "extends": "plugin:protractor/recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [2, 4, {"SwitchCase": 1}],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "globals": {
        "allure": true
    },
    "parserOptions": {
        "ecmaVersion": 2017
    }
};

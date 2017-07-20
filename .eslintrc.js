{
    "parser": "babel-eslint",
    // https://github.com/airbnb/javascript
    "extends": "airbnb-base",
    "rules": {
        "class-methods-use-this": 0,
        "indent": [2, 4, {"SwitchCase": 1}],
        "no-nested-ternary": 0,
        "max-len": [2, 120, 2, {
            "ignoreUrls": true,
            "ignoreComments": false
        }],
        "no-underscore-dangle": 0,
        "import/no-extraneous-dependencies": 0
    },
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true,
        "mocha": true,
        "node": true
    },
    "globals": {
        "_": false,
        "sinon": false
    }
}
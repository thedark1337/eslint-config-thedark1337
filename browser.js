'use strict';

const def = require('./');
const merge = require('lodash.merge');

const newRules = {
    parserOptions: {
        ecmaVersion: 5,
        ecmaFeatures: {
            modules: false
        }
    },
    env: {
        browser: true,
        jquery: true,
        node: false
    }
};

module.exports = merge({}, def, newRules);

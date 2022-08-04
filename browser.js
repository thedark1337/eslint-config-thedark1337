'use strict';

const def = require('./');
const merge = require('lodash.merge');

const newRules = {
    parserOptions: {
        ecmaVersion: 6,
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

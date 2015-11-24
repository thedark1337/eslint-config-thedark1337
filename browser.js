'use strict';

let def = require('./');
const merge = require('lodash.merge');
const newRules ={
    ecmaFeatures: {},
    env: {
        browser: true,
        jquery: true,
        node: false
    }
};

module.exports = merge({}, def, newRules);

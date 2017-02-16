'use strict';

const def = require('./');
const merge = require('lodash.merge');

const newRules = {
    parserOptions: {
        sourceType: 'module'
    },
    parser: 'babel-eslint',
    plugins: ['babel']
};

module.exports = merge({}, def, newRules);

'use strict';

const def = require('./');
const merge = require('lodash.merge');

const newRules = {
    parserOptions: {
        sourceType: 'module'
    },
    parser: 'babel-eslint',
    plugins: ['babel'],
    rules: {
        'babel/object-shorthand': [2, 'always'],
        'babel/generator-star-spacing': def.rules['generator-star-spacing'],
        'babel/arrow-parens': def.rules['arrow-parens'],
        'babel/object-curly-spacing': def.rules['object-curly-spacing'],
        'object-shorthand': 0,
        'generator-star-spacing': 0,
        'arrow-parens': 0,
        'object-curly-spacing': 0
    }
};

module.exports = merge({}, def, newRules);

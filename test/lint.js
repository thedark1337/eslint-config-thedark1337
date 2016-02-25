'use strict';

const lint = require('mocha-eslint');
const options = {
    alwaysWarn: require('is-ci')
};
const paths = [
    'browser.js',
    'esnext.js',
    'index.js',
    'test/*.js'
];

lint(paths, options);

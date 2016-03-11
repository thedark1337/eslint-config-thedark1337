'use strict';
const isCI = Boolean(process.env.CI || process.env.CONTINUOUS_INTEGRATION);
const lint = require('mocha-eslint');
const options = {
    alwaysWarn: !isCI
};
const paths = [
    'browser.js',
    'esnext.js',
    'index.js',
    'test/*.js'
];

lint(paths, options);

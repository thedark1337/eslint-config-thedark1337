'use strict';

const eslint = require('eslint');
const expect = require('unexpected');
const fs = require('fs');
const path = require('path');
const replacements = require('eslint/conf/replacements.json').rules;
const tempWrite = require('temp-write');
const validator = require('eslint/lib/config/config-validator');
const eslintRules = Object.assign(getRuleMap(path.join(__dirname, '../node_modules/eslint/lib/rules/'), ''));

function runLint(str, conf) {
    const linter = new eslint.CLIEngine({
        useEslintrc: false,
        configFile: tempWrite.sync(JSON.stringify(conf))
    });

    return linter.executeOnText(str).results[0].messages;
}

// Copied from https://github.com/mysticatea/eslint-config. Thank you to mysticatea
function getRuleMap(rootPath, prefix) {
    return fs.readdirSync(rootPath).reduce((retv, filename) => { // eslint-disable-line no-sync
        if (path.extname(filename) === '.js') {
            const key = prefix + path.basename(filename, '.js');

            if (replacements[key] === undefined) {
                retv[key] = true;
            }
        }

        return retv;
    }, {});
}

describe('Main Rules Test', () => {
    const mainConf = require('../');
    const mainKeys = Object.keys(mainConf.rules).sort();
    const eslintKeys = Object.keys(eslintRules).sort();

    describe('Syntax Errors', () => {

        it('Should either exist as a rule or not be configured yet', () => {
            expect(mainKeys, 'to equal', eslintKeys);
        });

        it('Should be valid configuration', () => {
            expect(validator.validate(mainConf, 'index.js'), 'to be undefined');
        });

        it('Should be objects for parserOptions, env, rules', () => {
            expect(mainConf.parserOptions, 'to be an', 'object');
            expect(mainConf.env, 'to be an', 'object');
            expect(mainConf.rules, 'to be an', 'object');
        });
    });

    describe('Linting Errors', () => {

        it('Should return errors for no-trailing-spaces, strict, quotes, and semicolons', () => {
            const errors = runLint(' \n console.log("thedark1337 Wins")\n', mainConf);

            expect(errors[0].ruleId, 'to be', 'no-trailing-spaces');
            expect(errors[1].ruleId, 'to be', 'strict');
            expect(errors[2].ruleId, 'to be', 'quotes');
            expect(errors[3].ruleId, 'to be', 'semi');
        });
    });

});

describe('Browser Rules Test', () => {
    const browserConf = require('../browser.js');

    it('Should define all the right environments', () => {
        expect(browserConf.env, 'to have properties', {
            browser: true,
            es6: true,
            jquery: true,
            node: false
        });
    });
});

describe('ESNext Rules Test', () => {
    const es6Conf = require('../esnext.js');

    describe('Syntax Errors', () => {

        it('Should have plugin babel and parser babel-eslint', () => {
            expect(es6Conf.parser, 'to be', 'babel-eslint');
            expect(es6Conf.plugins, 'to equal', ['babel']);
        });
    });

    describe('Linting Errors', () => {

        it('Should return errors for strict, newline-after-var, prefer-const and babel/object-shorthand', () => {
            const errors = runLint('export class Foo {\n    function() {\n        const x = 0;\n        const y = 0;\n        const z = 0;\n        const foo = 0;\n\n        console.log(foo);\n        let bar = {\n            x: x,\n            y: y,\n            z: z\n        };\n        console.log(bar);\n        }\n    }\n', es6Conf);

            expect(errors[0].ruleId, 'to be', 'newline-after-var');
            expect(errors[1].ruleId, 'to be', 'prefer-const');
            expect(errors[2].ruleId, 'to be', 'object-shorthand');
        });
    });
});

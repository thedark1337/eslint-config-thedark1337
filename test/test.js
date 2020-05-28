'use strict';

const expect = require('unexpected');
const { Linter } = require('eslint');
const linter = new Linter();
const eslintRules = Array.from(linter.getRules().keys());

function runLint(str, conf) {
    return linter.verify(str, conf);
}

describe('Main Rules Test', () => {
    const mainConf = require('../');
    const mainKeys = Object.keys(mainConf.rules).sort();
    const eslintKeys = eslintRules.sort();

    describe('Syntax Errors', () => {

        it('Should either exist as a rule or not be configured yet', () => {
            expect(mainKeys, 'to equal', eslintKeys);
        });

        it('Should be objects for parserOptions, env, rules', () => {
            expect(mainConf.parserOptions, 'to be an', 'object');
            expect(mainConf.env, 'to be an', 'object');
            expect(mainConf.rules, 'to be an', 'object');
        });
    });

    describe('Linting Errors', () => {

        it('Should return errors for no-trailing-spaces, strict, quotes, and semicolons', () => {
            const errors = runLint(' \nconsole.log("thedark1337 Wins")\n', mainConf);

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

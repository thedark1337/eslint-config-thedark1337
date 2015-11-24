'use strict';

const chai = require('chai');
let errors;
const eslint = require('eslint');
const expect = chai.expect;
const fs = require('fs');
const path = require('path');
const tempWrite = require('temp-write');
const validator = require('eslint/lib/config/config-validator');
const eslintRules = Object.assign(getRuleMap(path.join(__dirname, '../node_modules/eslint/lib/rules/'), ''))

function runLint(str, conf) {
    const linter = new eslint.CLIEngine({
        useEslintrc: false,
        configFile: tempWrite.sync(JSON.stringify(conf))
    });

    return linter.executeOnText(str).results[0].messages;
}

// Copied from https://github.com/mysticatea/eslint-config. Thank you to mysticatea
function getRuleMap(rootPath, prefix) {
    return fs.readdirSync(rootPath).reduce(function makeMap(retv, filename) {
        if (path.extname(filename) === '.js') {
            const key = prefix + path.basename(filename, '.js');

            retv[key] = true;
        }
        return retv;
    }, {});
}
describe('Main Rules Test', function() {
    const mainConf = require('../');
    const mainKeys = Object.keys(mainConf.rules).sort();
    const eslintKeys = Object.keys(eslintRules).sort();

    describe('Syntax Errors', function() {
        it('Should either exist as a rule or not be configured yet', function() {
            expect(mainKeys).to.eql(eslintKeys);
        });

        it('Should be valid configuration', function() {
            expect(validator.validate(mainConf, 'index.js')).to.be.undefined;
        });

        it('Should be objects', function() {
            expect(mainConf.ecmaFeatures).to.be.an('object');
            expect(mainConf.env).to.be.an('object');
            expect(mainConf.rules).to.be.an('object');
        });
    });

    describe('Linting Errors', function() {
        it('Should return errors for indentation, quotes, and semicolons', function() {
            this.timeout(7500);
            errors = runLint(' \n console.log("thedark1337 Wins")\n', mainConf);
            expect(errors[0].ruleId).to.equal('no-trailing-spaces');
            expect(errors[1].ruleId).to.equal('quotes');
            expect(errors[2].ruleId).to.equal('semi');
        });
    })

});


describe('Browser Rules Test', function() {
    const browserConf = require('../browser.js');

    it('Should define all the right environments', function() {
        expect(browserConf.env).to.deep.equal({
            browser: true,
            es6: true,
            jquery: true,
            node: false
        })
    });
});

describe('ES6 Rules Test', function() {
    const es6Conf = require('../esnext.js');
    it('Should catch syntax errors', function() {
        this.timeout(7500);
        errors = runLint('export class Foo { function() {\n    const x = 0;\n    const y = 0;\n    const z = 0;\n    const foo = 0;\n    console.log(foo);\n    let bar = {\n        x: x,\n        y: y,\n        z: z\n    };\n\n    console.log(bar);\n} }\n', es6Conf);
        expect(errors[0].ruleId).to.equal('newline-after-var');
        expect(errors[1].ruleId).to.equal('prefer-const');
        expect(errors[2].ruleId).to.equal('babel/object-shorthand');
    });

});

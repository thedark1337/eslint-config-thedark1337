'use strict';

const chai = require('chai');
let errors;
const eslint = require('eslint');
const expect = chai.expect;
const path = require('path');
const tempWrite = require('temp-write');

function runLint(str, conf) {
    const linter = new eslint.CLIEngine({
        useEslintrc: false,
        configFile: tempWrite.sync(JSON.stringify(conf))
    });
    return linter.executeOnText(str).results[0].messages;
}

describe('Main Rules Test', function() {
    const mainConf = require('../');

    it('Should be objects', function() {
        expect(mainConf.ecmaFeatures).to.be.an('object');
        expect(mainConf.env).to.be.an('object');
        expect(mainConf.rules).to.be.an('object');
    });

    describe('Linting Errors', function() {
        it('Should return errors for indentation, quotes, and semicolons', function() {
            this.timeout(5000);
            errors = runLint('\'use strict\';\n console.log("thedark1337 Wins")\n', mainConf);
            expect(errors[0].ruleId).to.equal('strict');
            expect(errors[1].ruleId).to.equal('indent');
            expect(errors[2].ruleId).to.equal('quotes');
            expect(errors[3].ruleId).to.equal('semi');
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

describe('Plug.dj Rules Test', function() {
    const plugdjConf = require('../plugdj.js');

    it('Should define all the right environments', function() {
        expect(plugdjConf.env).to.deep.equal({
            amd: true,
            browser: true,
            es6: true,
            jquery: true,
            node: false
        });
    });

    it('Should not error on global const API', function() {
        errors = runLint("'use strict';\nconsole.log(API.BAN.HOUR);\n", plugdjConf);
        expect(errors).to.be.empty;
    });

    it('Should set the right globals', function() {
        expect(plugdjConf.globals).to.have.all.keys('API', 'requirejs');
    });

});

describe('ES6 Rules Test', function() {
    const es6Conf = require('../esnext.js');
    it('Should catch syntax errors', function() {
        this.timeout(5000);
        errors = runLint('export class Foo { function() {\n    const x = 0;\n    const y = 0;\n    const z = 0;\n    const foo = 0;\n    console.log(foo);\n    let bar = {\n        x: x,\n        y: y,\n        z: z\n    };\n    console.log(bar);\n} }\n', es6Conf);
            expect(errors[0].ruleId).to.equal('prefer-const');
            expect(errors[1].ruleId).to.equal('babel/object-shorthand');
    });

});

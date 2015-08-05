'use strict';

var chai = require('chai');
var errors;
var eslint = require('eslint');
var expect = chai.expect;
var path = require('path');
var tempWrite = require('temp-write');

function deleteCache() {
    Object.keys(require.cache).forEach(function(module) {
        delete require.cache[require.resolve(module)];
    });
}

function runLint(str, conf) {
    var linter = new eslint.CLIEngine({
        useEslintrc: false,
        configFile: tempWrite.sync(JSON.stringify(conf))
    });
    return linter.executeOnText(str).results[0].messages;
}

describe('Main Rules Test', function() {
    deleteCache();
    var mainConf = require('../');

    it('Should be objects', function() {
        expect(mainConf.env).to.be.an('object');
        expect(mainConf.rules).to.be.an('object');
    });

    describe('Linting Errors', function() {
        it('Should return errors for indentation, quotes, and semicolons', function() {
            errors = runLint('\'use strict\';\n console.log("thedark1337Wins")\n', mainConf);
            expect(errors[0].ruleId).to.equal('indent');
            expect(errors[1].ruleId).to.equal('quotes');
            expect(errors[2].ruleId).to.equal('semi');
        });
    })

});


describe('Browser Rules Test', function() {
    deleteCache();
    var browserConf = require('../browser.js');

    it('Should define all the right environments', function() {
        expect(browserConf.env).to.deep.equal({
            jquery: true,
            node: false
        })
    });
});

describe('Plug.dj Rules Test', function() {
    deleteCache();
    var plugdjConf = require('../plugdj.js');

    it('Should define all the right environments', function() {
        expect(plugdjConf.env).to.deep.equal({
            amd: true,
            jquery: true,
            node: false
        });
    });

    it('Should not error on global var API', function() {
        errors = runLint("'use strict';\nconsole.log(API.BAN.HOUR);\n", plugdjConf);
        expect(errors).to.be.empty;
    });

    it('Should set the right globals', function() {
        expect(plugdjConf.globals).to.have.all.keys('API', 'requirejs');
    });

});

describe('ES6 Rules Test', function() {
    deleteCache();
    var es6Conf = require('../esnext.js');
    it('Should catch syntax errors', function() {
        errors = runLint('class Foo { function() {\n    const x = 0;\n    const y = 0;\n    const z = 0;\n    var foo = 0;\n    console.log(foo);\n    let bar = {\n        x: x,\n        y: y,\n        z: z\n    };\n    console.log(bar);\n} }\n', es6Conf);
            expect(errors[0].ruleId).to.equal('no-unused-vars');
            expect(errors[1].ruleId).to.equal('no-var');
            expect(errors[2].ruleId).to.equal('prefer-const');
            expect(errors[3].ruleId).to.equal('object-shorthand');
    });

});

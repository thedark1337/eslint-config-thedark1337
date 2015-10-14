'use strict';

const deepAssign = require('deep-assign');
let def = require('./');

def = deepAssign({}, def);

def.ecmaFeatures = {};
def.env.amd = true;
def.env.browser = true;
def.env.jquery = true;
def.env.node = false;
def.rules.curly = 0;
def.rules['global-require'] = 0;
def.globals = {
    API: false,
    requirejs: false
};

module.exports = def;

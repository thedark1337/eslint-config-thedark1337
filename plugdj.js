'use strict';

var def = require('./');

def.extends = 'xo/browser';
def.env.jquery = true;
def.env.amd = true;
def.env.node = false;
def.rules.curly = 0;
def.globals = {
    API: false,
    requirejs: false
};

module.exports = def;

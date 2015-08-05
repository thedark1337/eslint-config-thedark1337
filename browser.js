'use strict';

var def = require('./');

def.extends = 'xo/browser';
def.env.jquery = true;
def.env.node = false;

module.exports = def;

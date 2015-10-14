'use strict';

const deepAssign = require('deep-assign');
let def = require('./');

def = deepAssign({}, def);

def.ecmaFeatures = {};
def.env.browser = true;
def.env.jquery = true;
def.env.node = false;

module.exports = def;

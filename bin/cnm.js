#!/usr/bin/env node

require('@babel/register')({
    only: [/src/],
    cache: false
});

module.exports = require('../src/index.js');

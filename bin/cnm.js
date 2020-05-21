#!/usr/bin/env node

var args = process.argv.slice(2);

var env = /^--env=([a-zA-Z]+)$/g.exec(args);

process.env.NODE_ENV = env && env[1];

if (process.env.NODE_ENV === 'development') {
    require('@babel/register')({
        only: [/src/],
        cache: false
    });

    module.exports = require('../src/index.js');
} else {
    require('@babel/register')({
        only: [/dist/],
        cache: false
    });

    module.exports = require('../dist/bundle.min');
}

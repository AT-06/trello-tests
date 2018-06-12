'use strict';
const delimiter = ',';
const tagIdent = '#';
let argv = require('yargs').argv;
let tagsOpt = typeof argv.tags === 'string' && argv.tags;
let grepString, tags;

if (tagsOpt) {
    tags = tagsOpt.split(delimiter);
    grepString = tags.map(tag => `${tagIdent}${tag}`).join('|');
}

module.exports = function getMochaTags() {
    return grepString;
};

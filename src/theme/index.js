const colors = require('./colors');
const variables = require('./variables');
const breakpoints = require('./breakpoints');

exports.variables = Object.assign({}, colors, variables);
exports.breakpoints = breakpoints;

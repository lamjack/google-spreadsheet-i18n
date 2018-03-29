#!/usr/bin/env node

var fs = require('fs');
var app = require('commander');
var Promise = require('bluebird');
var helper = require('./helper');
var packageData = require('./package.json');

app
    .version(packageData.version)
    .usage('<spreadsheet-id> [saveas] [options]')
    .option('-b, --beautify', 'Beautify final JSON')
    .parse(process.argv);

if (app.args.length < 1) {
    app.help();
}

app.spreadsheetId = app.args[0] || app.spreadsheetId;

var saveas = app.args[1];

helper.spreadsheetToJson(app).then(function(result) {
    if (saveas) {
        result = JSON.stringify(result, null, app.beautify ? 4 : null);
        return Promise.promisify(fs.writeFile)(saveas, result, 'utf-8');
    } else {
    }
});

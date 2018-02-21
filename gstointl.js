#!/usr/bin/env node

var app = require('commander');
var helper = require('./helper');
var packageData = require('./package.json');

app
    .version(packageData.version)
    .usage('<spreadsheet-id> [saveas] [options]')
    .parse(process.argv);

if (app.args.length < 1) {
    app.help();
}

app.spreadsheetId = app.args[0] || app.spreadsheetId;

var saveas = app.args[1];

helper
    .spreadsheetToJson(app)
    .then(function (result) {
        if (saveas) {

        } else {
            process.stdout.write(result);
        }
    });
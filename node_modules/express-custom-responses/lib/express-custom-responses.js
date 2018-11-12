/*
 * express-custom-responses
 *
 * Copyright (c) 2015 Chris Gregory
 * Licensed under the MIT license.
 */

var express = require.main.require('express'); // Peer dependency
var fs = require('fs');
var path = require('path');


function removeFileExtension(filename) {
    return filename.split('.')[0]; // e.g. remove ".js" extension
}

function addCustomResponse(responseName, filePath) {
    express.response[responseName] = require(filePath);
}

module.exports = function(responsePath) {

    if (fs.existsSync(responsePath)) { // add custom responses if they exists

        var customResponses = fs.readdirSync(responsePath);
        
        customResponses.forEach(function(response) {
            var responseName = removeFileExtension(response);
            addCustomResponse(responseName, path.join(responsePath, response));
        });

    }

    var defaultResponses = fs.readdirSync(path.join(__dirname, '/default'));

    defaultResponses.forEach(function(response) {
        var responseName = removeFileExtension(response);
        if (!express.response[responseName])  // don't overwrite custom responses
            addCustomResponse(responseName, path.join(__dirname, 'default', response));
    });

};
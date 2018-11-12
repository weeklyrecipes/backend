#express-custom-responses

A custom middleware for express that allows you to add custom methods to the response object. This helps to normalize responses across your routes/controllers.

## Installation
    npm install express-shopify-responses

## Features

* Overrideable default responses
	* **ok, badRequest, serverError, unauthorized, forbidden, notFound**
* Add custom responses of your own

~~~
# app.js
var express = require('express');
var path = require('path');

// must come AFTER require('express') and BEFORE any routes
var customResponses = require('express-custom-respones');
customResponses(path.join(__dirname, '/path/to/custom/responses'));

var app = express();

app.get('/ok-route', function(req, res) {
    res.ok('This route is ok!');
});

app.get('/server-error', function(req, res) {
    res.serverError('Something went wrong!');
});
~~~

## Default responses

### ok

~~~

~~~

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var connectOptions = {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
};
var MONGO_URI = 'mongodb://heroku_sz1xtlxd:m1go0e6822ttstpvbec0rvt4ob@ds159673-a0.mlab.com:59673,ds159673-a1.mlab.com:59673/heroku_sz1xtlxd?replicaSet=rs-ds159673';
console.log(MONGO_URI);
exports.db = mongoose.createConnection(MONGO_URI, connectOptions);
// handlers
exports.db.on('connecting', function () {
    console.log('\x1b[32m', 'MongoDB :: connecting');
});
exports.db.on('error', function (error) {
    console.log('\x1b[31m', 'MongoDB :: connection' + error);
    mongoose.disconnect();
});
exports.db.on('connected', function () {
    console.log('\x1b[32m', 'MongoDB :: connected');
});
exports.db.once('open', function () {
    console.log('\x1b[32m', 'MongoDB :: connection opened');
});
exports.db.on('reconnected', function () {
    console.log('\x1b[33m"', 'MongoDB :: reconnected');
});
exports.db.on('reconnectFailed', function () {
    console.log('\x1b[31m', 'MongoDB :: reconnectFailed');
});
exports.db.on('disconnected', function () {
    console.log('\x1b[31m', 'MongoDB :: disconnected');
});
exports.db.on('fullsetup', function () {
    console.log('\x1b[33m"', 'MongoDB :: reconnecting... %d');
});
//# sourceMappingURL=connection.js.map
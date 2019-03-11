"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const connectOptions = {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
};
const MONGO_URI = 'mongodb://heroku_sz1xtlxd:m1go0e6822ttstpvbec0rvt4ob@ds159673-a0.mlab.com:59673,ds159673-a1.mlab.com:59673/heroku_sz1xtlxd?replicaSet=rs-ds159673';
console.log(MONGO_URI);
exports.db = mongoose.createConnection(MONGO_URI, connectOptions);
// handlers
exports.db.on('connecting', () => {
    console.log('\x1b[32m', 'MongoDB :: connecting');
});
exports.db.on('error', (error) => {
    console.log('\x1b[31m', 'MongoDB :: connection' + error);
    mongoose.disconnect();
});
exports.db.on('connected', () => {
    console.log('\x1b[32m', 'MongoDB :: connected');
});
exports.db.once('open', () => {
    console.log('\x1b[32m', 'MongoDB :: connection opened');
});
exports.db.on('reconnected', () => {
    console.log('\x1b[33m"', 'MongoDB :: reconnected');
});
exports.db.on('reconnectFailed', () => {
    console.log('\x1b[31m', 'MongoDB :: reconnectFailed');
});
exports.db.on('disconnected', () => {
    console.log('\x1b[31m', 'MongoDB :: disconnected');
});
exports.db.on('fullsetup', () => {
    console.log('\x1b[33m"', 'MongoDB :: reconnecting... %d');
});
//# sourceMappingURL=connection.js.map
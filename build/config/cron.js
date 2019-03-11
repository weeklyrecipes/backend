"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cron_1 = require("cron");
const TEST_CRON_INTERVAL = '* 1 * * * *';
/**
 * @class Cron
 */
class Cron {
    static testCron() {
        new cron_1.CronJob(TEST_CRON_INTERVAL, () => {
            // console.log('Hello, I am Cron! Please see ../config/cron.ts');
        }, null, true);
    }
    // init
    static init() {
        Cron.testCron();
    }
}
exports.default = Cron;
//# sourceMappingURL=cron.js.map
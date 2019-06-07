"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PromoModel_1 = require("../models/PromoModel");
var voucher_codes = require('voucher-code-generator');
class PromoController {
    /**
    * @param  {express.Request} req
    * @param  {express.Response} res
    * @param  {express.NextFunction} next
    */
    createCodes(req, res, next) {
        let n = req.body.number;
        let type = req.body.type;
        let codes = voucher_codes.generate({
            length: 8,
            count: n
        });
        let i = 0;
        while (codes[i]) {
            PromoModel_1.default.create({
                code: codes[i],
                type: type
            });
            i++;
        }
        res.status(200).json(codes);
    }
    getCodes(req, res, next) {
        PromoModel_1.default.find({}).then((promos) => {
            res.status(200).json(promos);
        });
    }
}
exports.default = new PromoController();
//# sourceMappingURL=PromoController.js.map
import * as express from 'express';
import PromoModel from '../models/PromoModel';
var voucher_codes = require('voucher-code-generator');

class PromoController {

     /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     * @param  {express.NextFunction} next
     */
    public createCodes(req: express.Request, res: express.Response, next: express.NextFunction): void {
        let n = req.body.number;
        let type = req.body.type;
        let codes = voucher_codes.generate({
          length: 8,
          count: n
        })

        let i = 0;
        while (codes[i]) {
          new PromoModel({
            code: codes[i],
            type: type
          })
          i++;
        }
        res.status(200).json(codes);
    }

    public getCodes(req: express.Request, res: express.Response, next: express.NextFunction): void {
      PromoModel.find({}).then((promos) => {
        res.status(200).json(promos);
      })
    }

    // add promo: if code available,  check type, add expiration date to 3/6/12 months from present/change to valid

}


export default new PromoController();

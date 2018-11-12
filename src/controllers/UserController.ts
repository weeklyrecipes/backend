import UserModel from '../models/UserModel';
import * as express from 'express';

class UserController {
    /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     * @param  {express.NextFunction} next
     */
    public getUser(req: express.Request, res: express.Response, next: express.NextFunction): void {
        UserModel
            .findOne({
                name: req.query.name,
                email: req.query.email
            })
            .then((data) => {
                res.status(200).json({ data });
            })
            .catch((error: Error) => {
                res.status(500).json({
                    error: error.message,
                    errorStack: error.stack
                });
                next(error);
            });
    }

    /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     * @param  {express.NextFunction} next
     */
    public createUser(req: express.Request, res: express.Response, next: express.NextFunction): void {
        UserModel
            .create({
                name: req.body.name,
                email: req.body.email
            })
            .then((data) => {
                res.status(200).json({ data });
            })
            .catch((error: Error) => {
                res.status(500).json({
                    error: error.message,
                    errorStack: error.stack
                });
                next(error);
            });
    }
}

export default new UserController();

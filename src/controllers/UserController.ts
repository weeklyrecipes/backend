import UserModel from '../models/UserModel';
import * as express from 'express';
import { calculateRecipes } from '../helpers/calculateRecipe';

class UserController {
    /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     * @param  {express.NextFunction} next
     */
    public getUser(req: express.Request, res: express.Response, next: express.NextFunction): void {
        UserModel
            .findOne({
                fireId: req.query.fireId,
                email: req.query.email
            })
            .then((user) => {
                // updatePass(user);
                // updateMenus(user);
                if (user) {
                  res.status(200).json({ user });
                }
                else {
                  res.status(400).json({error: "update-payment"})
                }
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
                email: req.body.email,
                activity: req.body.activity,
                allergens: req.body.allergens,
                gender: req.body.gender,
                weight: req.body.weight,
                height: req.body.height,
                age: req.body.age,
                _id: req.body.fireId
            })
            .then((data) => {
                // calculateRecipes(data);
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

import UserModel from '../models/UserModel';
import * as express from 'express';
import { calculateRecipes } from '../helpers/calculateRecipe';
import { finalCalculus } from '../helpers/bodyMetrics';

class UserController {
    /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     * @param  {express.NextFunction} next
     */
    public getUser(req: express.Request, res: express.Response, next: express.NextFunction): void {
        UserModel
            .findById(req.params.id)
            .then((user) => {
                if (user) {
                  let calories = finalCalculus(user);
                  user.calories =  (calories > 1200 ? calories : 1200);
                  calculateRecipes(user).then((recipes) => {
                    // console.log(recipes)
                    console.log("USER");
                    console.log(user);
                    user.menus = recipes;
                    res.status(200).json(user);
                    user.save();
                  })
                  // res.status(200).json({ user });
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
                gender: req.body.gender,
                objective: req.body.objective,
                weight: req.body.weight,
                height: req.body.height,
                birthday: req.body.birthday,
                _id: req.body.fireId
            })
            .then((user) => {
                let calories = finalCalculus(user);
                user.calories =  (calories > 1200 ? calories : 1200);
                calculateRecipes(user).then((recipes) => {
                  user.menus = recipes;
                  user.save((user) => {
                    res.json(user);
                  })
                })
                // res.status(200).json({ data });
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
    public editUser(req: express.Request, res: express.Response, next: express.NextFunction): void {
        UserModel
            .findById(req.body.userId)
            .then((user) => {
                let calories = finalCalculus(user);
                user.calories =  (calories > 1200 ? calories : 1200);
                calculateRecipes(user).then((recipes) => {
                  user.menus = recipes;
                  res.status(200).json({ user });
                  user.save();
                })
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

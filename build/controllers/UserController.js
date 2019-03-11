"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("../models/UserModel");
const calculateRecipe_1 = require("../helpers/calculateRecipe");
const bodyMetrics_1 = require("../helpers/bodyMetrics");
class UserController {
    /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     * @param  {express.NextFunction} next
     */
    getUser(req, res, next) {
        UserModel_1.default
            .findById(req.params.id)
            .then((user) => {
            if (user) {
                let calories = bodyMetrics_1.finalCalculus(user);
                user.calories = (calories > 1200 ? calories : 1200);
                calculateRecipe_1.calculateRecipes(user).then((recipes) => {
                    // console.log(recipes)
                    console.log("USER");
                    console.log(user);
                    user.menus = recipes;
                    res.status(200).json({ user });
                    user.save();
                });
                // res.status(200).json({ user });
            }
            else {
                res.status(400).json({ error: "update-payment" });
            }
        })
            .catch((error) => {
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
    createUser(req, res, next) {
        UserModel_1.default
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
            let calories = bodyMetrics_1.finalCalculus(user);
            user.calories = (calories > 1200 ? calories : 1200);
            calculateRecipe_1.calculateRecipes(user).then((recipes) => {
                user.menus = recipes;
                user.save((user) => {
                    res.status(200).json({ user });
                });
            });
            // res.status(200).json({ data });
        })
            .catch((error) => {
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
    editUser(req, res, next) {
        UserModel_1.default
            .findById(req.body.userId)
            .then((user) => {
            let calories = bodyMetrics_1.finalCalculus(user);
            user.calories = (calories > 1200 ? calories : 1200);
            calculateRecipe_1.calculateRecipes(user).then((recipes) => {
                user.menus = recipes;
                user.save(() => {
                    res.status(200).json({ user });
                });
            });
        })
            .catch((error) => {
            res.status(500).json({
                error: error.message,
                errorStack: error.stack
            });
            next(error);
        });
    }
}
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map
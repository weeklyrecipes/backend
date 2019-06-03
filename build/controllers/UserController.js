"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("../models/UserModel");
const PromoModel_1 = require("../models/PromoModel");
const calculateRecipe_1 = require("../helpers/calculateRecipe");
const bodyMetrics_1 = require("../helpers/bodyMetrics");
class UserController {
    // check promo and change it if needed
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
                    user.menus = recipes;
                    user.markModified('menus');
                    user.save((err, saved) => {
                        res.status(200).json(saved);
                    });
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
            user.createdAt = new Date();
            user.calories = (calories > 1200 ? calories : 1200);
            user.menus = {};
            calculateRecipe_1.calculateRecipes(user).then((recipes) => {
                user.menus = recipes;
                user.markModified('menus');
                user.save((err, saved) => {
                    res.status(200).json(saved);
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
            .findById(req.params.id)
            .then((user) => {
            if (req.body.menus && req.body.menus != user.menus) {
                user.menus = req.body.menus;
            }
            else {
                if (new Date().getDay() == 5 || new Date().getDay() == 6 || new Date().getDay() == 0) {
                    let date = new Date();
                    let d = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
                    let found = false;
                    for (let menuDate of Object.keys(user.menus)) {
                        if (d == menuDate) {
                            found = true;
                        }
                        else if (found) {
                            if (date.getDate() != 1)
                                date.setDate(date.getDate() + 1);
                            else
                                delete user.menus[menuDate];
                        }
                    }
                }
                else {
                    user.menus = {};
                }
                user.objective = req.body.objective;
                user.activity = req.body.activity;
                user.weight = req.body.weight;
            }
            let calories = bodyMetrics_1.finalCalculus(user);
            user.calories = (calories > 1200 ? calories : 1200);
            calculateRecipe_1.calculateRecipes(user).then((recipes) => {
                user.menus = recipes;
                user.markModified('menus');
                user.save((err, saved) => {
                    res.status(200).json(saved);
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
    enterCode(req, res, next) {
        PromoModel_1.default
            .find({ code: req.body.code })
            .then((code) => {
            // if code available,  check type, add expiration date to 3/6/12 months from present/change to valid
            if (code && code.status == "available") {
                let currentDate = new Date();
                let exp_date = new Date();
                exp_date.setMonth(exp_date.getMonth() + code.type);
                code.status == "valid";
                code.exp_date = exp_date;
                UserModel_1.default
                    .findById(req.params.id)
                    .then((user) => {
                    user.pass = code;
                    code.userId = user._id;
                    user.save();
                    code.save();
                    res.status(200).json(user);
                });
            }
            else {
                res.status(401).json({});
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
}
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map
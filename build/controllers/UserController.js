"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserModel_1 = require("../models/UserModel");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     * @param  {express.NextFunction} next
     */
    UserController.prototype.getUser = function (req, res, next) {
        UserModel_1.default
            .findOne({
            fireId: req.query.fireId,
            email: req.query.email
        })
            .then(function (user) {
            // updatePass(user);
            // updateMenus(user);
            if (user) {
                res.status(200).json({ user: user });
            }
            else {
                res.status(400).json({ error: "update-payment" });
            }
        })
            .catch(function (error) {
            res.status(500).json({
                error: error.message,
                errorStack: error.stack
            });
            next(error);
        });
    };
    /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     * @param  {express.NextFunction} next
     */
    UserController.prototype.createUser = function (req, res, next) {
        UserModel_1.default
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
            .then(function (data) {
            // calculateRecipes(data);
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({
                error: error.message,
                errorStack: error.stack
            });
            next(error);
        });
    };
    return UserController;
}());
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var UserRouter_1 = require("./UserRouter");
var RecipeRouter_1 = require("./RecipeRouter");
var IngredientRouter_1 = require("./IngredientRouter");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    /**
     * @param  {IServer} server
     * @returns void
     */
    Routes.init = function (server) {
        var router = express.Router();
        // server.app.use('/', router);
        server.app.use('/v1/users', new UserRouter_1.default().router);
        server.app.use('/v1/recipes', new RecipeRouter_1.default().router);
        server.app.use('/v1/ingredients', new IngredientRouter_1.default().router);
    };
    return Routes;
}());
exports.default = Routes;
//# sourceMappingURL=routes.js.map
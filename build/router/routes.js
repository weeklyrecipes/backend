"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const UserRouter_1 = require("./UserRouter");
const RecipeRouter_1 = require("./RecipeRouter");
const IngredientRouter_1 = require("./IngredientRouter");
class Routes {
    /**
     * @param  {IServer} server
     * @returns void
     */
    static init(server) {
        const router = express.Router();
        // server.app.use('/', router);
        server.app.use('/v1/users', new UserRouter_1.default().router);
        server.app.use('/v1/recipes', new RecipeRouter_1.default().router);
        server.app.use('/v1/ingredients', new IngredientRouter_1.default().router);
    }
}
exports.default = Routes;
//# sourceMappingURL=routes.js.map
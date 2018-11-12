import * as express from 'express';
import UserRouter from './UserRouter';
import RecipeRouter from './RecipeRouter';
import IngredientRouter from './IngredientRouter';
import { IServer } from '../interfaces/ServerInterface';

export default class Routes {
    /**
     * @param  {IServer} server
     * @returns void
     */
    static init(server: IServer): void {
        const router: express.Router = express.Router();

        // server.app.use('/', router);
        server.app.use('/v1/users', new UserRouter().router);
        server.app.use('/v1/recipes', new RecipeRouter().router);
        server.app.use('/v1/ingredients', new IngredientRouter().router);
    }
}

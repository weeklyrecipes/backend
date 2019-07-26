import UserController from '../controllers/UserController';
import { Router } from 'express';
/**
 * @class UserRouter
 */
export default class UserRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {
        this.router.get('/:id', UserController.getUser);
        this.router.post('/', UserController.createUser);
        this.router.put('/:id', UserController.editUser);
        this.router.put('/:id/code', UserController.enterCode);
        this.router.put('/:id/activate', UserController.activate);
    }
}

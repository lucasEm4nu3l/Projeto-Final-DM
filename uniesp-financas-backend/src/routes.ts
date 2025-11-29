import { Router } from 'express'
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { ListDetailUserController } from './controllers/user/ListDetailUserController'
import { ListUserBalanceController } from './controllers/user/ListUserBalanceController'
import { CreateReceiveController } from './controllers/receive/CreateReceiveController'
import { ListReceivesController } from './controllers/receive/ListReceivesController'
import { DeleteReceiveController } from './controllers/receive/DeleteReceiveController'


import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();
const listDetailUserController = new ListDetailUserController();
const listUserBalanceController = new ListUserBalanceController();
const createReceiveController = new CreateReceiveController();
const listReceivesController = new ListReceivesController();
const deleteReceiveController = new DeleteReceiveController();

// -- ROTAS --
router.post('/users', (req, res) => createUserController.handle(req, res));

router.post("/login", (req, res) => authUserController.handle(req, res));

router.get("/me", isAuthenticated, (req, res) => listDetailUserController.handle(req, res));

router.get("/balance", isAuthenticated, (req, res) => listUserBalanceController.handle(req, res));

router.post("/receive", isAuthenticated, (req, res) => createReceiveController.handle(req, res));

router.get("/receives", isAuthenticated, (req, res) => listReceivesController.handle(req, res));

router.delete("/receives/delete", isAuthenticated, (req, res) => deleteReceiveController.handle(req, res));


export { router };
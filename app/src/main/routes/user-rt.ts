import {Router} from 'express';

function routes(User, resource) {
    let userRouter: Router = Router(),
        userCtrl = require('../controllers/user-ctrl')(User, resource);

    userRouter.route('/:id/customEndpoint')
        .get(userCtrl.customEndpoint);

    return userRouter;
}

export = routes;

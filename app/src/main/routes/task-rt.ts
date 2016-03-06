import {Router} from 'express';

function routes(Task, resource) {
    let taskRouter: Router = Router(),
        taskCtrl = require('../controllers/task-ctrl')(Task, resource);
 return taskRouter;
}

export = routes;

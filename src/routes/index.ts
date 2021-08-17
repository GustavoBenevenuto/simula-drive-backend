import {Router} from 'express';


import questoesRouter from './questoesRouter.routes';

const routes = Router();

routes.use('/questoes', questoesRouter);

export default routes;
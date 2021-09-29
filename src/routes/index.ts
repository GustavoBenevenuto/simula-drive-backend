import {Router} from 'express';


import questoesRouter from './questoesRouter.routes';
import feedbackRouter from './feedbackRouter.routes';

const routes = Router();

routes.use('/questoes', questoesRouter);

routes.use('/feedback', feedbackRouter);

export default routes;
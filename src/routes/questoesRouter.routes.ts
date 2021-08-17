import { Router } from 'express';
import AppError from '../errors/AppError';
import Questoes from '../models/Questoes';
import QuestoesService from '../services/QuestoesService';

const questoesRouter = Router();

questoesRouter.get('/', async (request, response) => {
    const { modulo } = request.query;

    if(modulo == null || modulo == undefined)
        throw new AppError('Deve informar o módulo.',400); 

    const resultado = await QuestoesService.execute(modulo.toString());

    return response.json(resultado);
});

export default questoesRouter;
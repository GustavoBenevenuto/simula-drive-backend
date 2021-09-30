import { Router } from 'express';
import AppError from '../errors/AppError';
import FeedbackService from '../services/FeedbackService';

const feedbackRouter = Router();

feedbackRouter.post('/', async (request, response) => {
    const { tipo_feedback, mensagem, avaliacao, id_questao } = request.body;

    if(tipo_feedback == undefined && mensagem == undefined && avaliacao == undefined && id_questao == undefined)
        throw new AppError('O corpo da requisição está incorreto.',400); 

    const feedback = { tipo_feedback, mensagem, avaliacao, id_questao };
    
    const feedbackService = new FeedbackService();
    
    const resultado = await feedbackService.execute(feedback);

    return response.json(resultado);
});

export default feedbackRouter;
import { Router } from 'express';
import AppError from '../errors/AppError';
import FeedbackService from '../services/FeedbackService';

const feedbackRouter = Router();

feedbackRouter.post('/', async (request, response) => {
    const { tipo_feedback, mensagem, avaliacao, id_questao } = request.body;

    const feedback = { tipo_feedback, mensagem, avaliacao, id_questao };

    console.log(feedback);

    // if(tipo == null || tipo == undefined)
    //     throw new AppError('Deve informar o tipo do feedback [avaliacao | report].',400); 

    const feedbackService = new FeedbackService();
    
    const resultado = await feedbackService.execute(feedback);

    return response.json(resultado);
});

export default feedbackRouter;
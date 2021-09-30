import { getRepository } from "typeorm";
import AppError from "../errors/AppError";
import Feedback from "../models/Feedback";

interface FeedbackDTO {
    tipo_feedback: string;
    mensagem: string;
    avaliacao: number;
    id_questao: number;
}

export default class FeedbackService {
    public async execute(feedback: FeedbackDTO): Promise<FeedbackDTO | null> {

        const feedbackRepository = getRepository(Feedback);
        
        if (feedback.tipo_feedback == null || feedback.tipo_feedback != 'avaliacao' && feedback.tipo_feedback != 'report')
            throw new AppError('Deve informar o tipo do feedback [avaliacao | report].', 400);

        if (feedback.tipo_feedback == 'report' && feedback.id_questao == null)
            throw new AppError('Em caso de [tipo_feedback=report], deve-se informar o ID da questão.', 400);

        if (feedback.tipo_feedback == 'avaliacao' && feedback.avaliacao == null)
            throw new AppError('Em caso de [tipo_feedback=avaliacao], deve-se informar o valor da AVALIACAO.', 400);

        const feedbackSalvo = feedbackRepository.save(feedback);

        return feedbackSalvo;
    }
}

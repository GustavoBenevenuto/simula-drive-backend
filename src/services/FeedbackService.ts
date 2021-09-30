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
        
        if (feedback.tipo_feedback == null || feedback.tipo_feedback != 'AVALIACAO' && feedback.tipo_feedback != 'REPORT')
            throw new AppError('Deve informar o tipo do feedback [AVALIACAO | REPORT].', 400);

        if (feedback.tipo_feedback == 'REPORT' && feedback.id_questao == null)
            throw new AppError('Em caso de [tipo_feedback=REPORT], deve-se informar o ID da questão.', 400);

        if (feedback.tipo_feedback == 'AVALIACAO' && feedback.avaliacao == null)
            throw new AppError('Em caso de [tipo_feedback=AVALIACAO], deve-se informar o valor da AVALIACAO.', 400);

        const feedbackSalvo = await feedbackRepository.save(feedback);
        
        return feedbackSalvo;
    }
}

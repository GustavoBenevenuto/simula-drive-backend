import { getRepository } from "typeorm";
import Feedback from "../models/Feedback";

interface FeedbackDTO{
    tipo_feedback: string;
    mensagem: string;
    avaliacao: number;
    id_questao: number;
}

export default class FeedbackService {
    public async execute(feedback: FeedbackDTO): Promise<FeedbackDTO | null> {

        const feedbackRepository = getRepository(Feedback);

        feedbackRepository.save(feedback);

        return feedback;
    }
}

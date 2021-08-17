import { getCustomRepository } from "typeorm";
import AppError from "../errors/AppError";
import QuestoesRepository from "../repositories/QuestoesRepository"
import Questoes from "../models/Questoes";


export default class QuestoesService {

    private static TODOS_MODULOS = ["normas_e_condutas", "infracao", "meio_ambiente", "primeiro_socorros", "legislacao", "mecanica", "sinalizacao", "direcao_defensiva"];

    static async execute(modulo: string): Promise<Questoes[]> {
        const questoesRepository = getCustomRepository(QuestoesRepository);

        const existeModulo = this.TODOS_MODULOS.includes(modulo);

        if (!existeModulo)
            throw new AppError('Módulo incorreto ou inexistente.', 400);

        const questoes = await questoesRepository.buscaPorModulo(modulo);

        if (questoes == null)
            throw new AppError('Não existe questões.', 400);


        const questoesService = new QuestoesService();

        const questoesAleatorias = questoesService.embaralharQuestoes(questoes, 30);

        // Serelização
        const resultado = questoesAleatorias.map((item: Questoes, index: number) => {
            return {
                numero_questao: index+1,
                ...item
            }
        });

        return resultado;
    }

    private embaralharQuestoes(questoes: Questoes[], quantidadeQuestoes: number): Questoes[] {
        const resultado = questoes && questoes.sort(() => Math.random() - 0.5);

        return resultado.slice(0, quantidadeQuestoes);
    }
}
import { EntityRepository, Repository } from 'typeorm';
import Questoes from '../models/Questoes';

@EntityRepository(Questoes)
export default class QuestoesRepository extends Repository<Questoes> {
    public async buscaPorModulo(modulo: string): Promise<Questoes[] | null>{
        const questoes = await this.find({
            where:{
                modulo: modulo
            }
        });


        return questoes;
    } 
}
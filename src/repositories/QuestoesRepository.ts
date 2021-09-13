import { Any, EntityRepository, Repository } from 'typeorm';
import Questoes from '../models/Questoes';

@EntityRepository(Questoes)
export default class QuestoesRepository extends Repository<Questoes> {
    public async buscaPorModulo(modulos: string[]): Promise<Questoes[] | null>{
        const questoes = await this.find({
            where:{
                modulo: Any(modulos) 
            }
        });


        return questoes;
    } 
}
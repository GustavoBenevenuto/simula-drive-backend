import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import Questoes from './Questoes';

@Entity('feedback')
export default class Feedback {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    tipo_feedback: string;
    
    @Column({nullable: true})
    mensagem: string;
    
    @Column({nullable: true, default: 0})
    avaliacao: number;
    
    @ManyToOne(type => Questoes, feedback => Feedback)
    @JoinColumn({name: 'id_questao'})
    questoes: Questoes;

    @Column({nullable: true})
    id_questao : number;

    @CreateDateColumn()
    created_at: Date;
}
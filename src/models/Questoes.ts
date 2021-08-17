import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('questoes')
export default class Questoes {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    pergunta: string;

    @Column({nullable: true})
    imagem: string;

    @Column()
    respA: string;

    @Column()
    respB: string;

    @Column()
    respC: string;
    
    @Column()
    respD: string;

    @Column()
    correta: string;

    @Column()
    modulo: string;
}
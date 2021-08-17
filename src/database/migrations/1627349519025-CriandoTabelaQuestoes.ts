import {MigrationInterface, QueryRunner} from "typeorm";

export class CriandoTabelaQuestoes1627349519025 implements MigrationInterface {
    name = 'CriandoTabelaQuestoes1627349519025'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "questoes" ("id" SERIAL NOT NULL, "pergunta" character varying NOT NULL, "imagem" character varying, "respA" character varying NOT NULL, "respB" character varying NOT NULL, "respC" character varying NOT NULL, "respD" character varying NOT NULL, "correta" character varying NOT NULL, "modulo" character varying NOT NULL, CONSTRAINT "PK_2f9d8a29333cf9246cec5f72abe" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "questoes"`);
    }

}

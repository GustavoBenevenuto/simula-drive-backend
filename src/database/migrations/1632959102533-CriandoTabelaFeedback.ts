import {MigrationInterface, QueryRunner} from "typeorm";

export class CriandoTabelaFeedback1632959102533 implements MigrationInterface {
    name = 'CriandoTabelaFeedback1632959102533'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "feedback" ("id" SERIAL NOT NULL, "tipo_feedback" character varying NOT NULL, "mensagem" character varying, "avaliacao" integer DEFAULT '0', "id_questao" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8389f9e087a57689cd5be8b2b13" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "feedback" ADD CONSTRAINT "FK_66a69b72161cf41d9a70cddd118" FOREIGN KEY ("id_questao") REFERENCES "questoes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "feedback" DROP CONSTRAINT "FK_66a69b72161cf41d9a70cddd118"`);
        await queryRunner.query(`DROP TABLE "feedback"`);
    }

}

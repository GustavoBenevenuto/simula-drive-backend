import {MigrationInterface, QueryRunner} from "typeorm";

export class AjusteTabelaFeedback1633045120503 implements MigrationInterface {
    name = 'AjusteTabelaFeedback1633045120503'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "feedback" DROP COLUMN "avaliacao"`);
        await queryRunner.query(`ALTER TABLE "feedback" ADD "avaliacao" numeric DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "feedback" DROP COLUMN "avaliacao"`);
        await queryRunner.query(`ALTER TABLE "feedback" ADD "avaliacao" integer DEFAULT '0'`);
    }

}

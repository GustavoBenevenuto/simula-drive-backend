import {MigrationInterface, QueryRunner} from "typeorm";

export class CorrecaoModuloMecaninca1628030222304 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE questoes SET modulo = 'mecanica' WHERE modulo = 'mecaninca'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE questoes SET modulo = 'mecaninca' WHERE modulo = 'mecanica'`);
    }

}

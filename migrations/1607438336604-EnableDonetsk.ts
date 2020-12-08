import { MigrationInterface, QueryRunner } from 'typeorm';

const statesTable = 'states';
const citiesTable = 'cities';
const column = 'isActive';
const stateId = 4691;
const cityId = 109546;

export class EnableDonetsk1607438336604 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`UPDATE ${statesTable} SET ${column}=true WHERE id=${stateId}`);
        await queryRunner.query(`UPDATE ${citiesTable} SET ${column}=true WHERE id=${cityId}`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`UPDATE ${statesTable} SET ${column}=false WHERE id=${stateId}`);
        await queryRunner.query(`UPDATE ${citiesTable} SET ${column}=false WHERE id=${cityId}`);
    }

}

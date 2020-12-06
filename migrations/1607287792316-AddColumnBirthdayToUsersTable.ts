import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

const table = 'users';
const column = 'birthday';

export class AddColumnBirthdayToUsersTable1606378165981 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn(table, new TableColumn({
            name: column,
            type: 'date',
            isNullable: true,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn(table, column);
    }

}

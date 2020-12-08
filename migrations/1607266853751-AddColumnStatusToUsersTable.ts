import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

const table = 'users';
const column = 'status';

export class AddColumnStatusToUsersTableTable1606378165981 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn(table, new TableColumn({
            name: column,
            type: 'enum',
            enum: ['searching', 'living'],
            isNullable: false,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn(table, column);
    }

}

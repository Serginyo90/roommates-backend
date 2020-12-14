import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

const table = 'conversations';
const column = 'lastViewedTime';

export class AddColumnLastViewedTimeToConversationsTable1607868302765 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn(table, new TableColumn({
            name: column,
            type: 'datetime',
            isNullable: false,
            default: 'now()',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn(table, column);
    }

}

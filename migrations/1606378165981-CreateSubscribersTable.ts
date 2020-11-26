import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const table = 'subscribers';

export class CreateSubscribersTable1606378165981 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: table,
            columns: [
                {
                    name: 'email',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'isActive',
                    type: 'tinyint',
                    default: true,
                },
                {
                    name: 'createdAt',
                    type: 'datetime',
                    default: 'now()',
                },
                {
                    name: 'updatedAt',
                    type: 'datetime',
                    default: 'now()',
                },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(table);
    }

}

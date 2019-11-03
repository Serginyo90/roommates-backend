import { MigrationInterface, QueryRunner } from 'typeorm';
import { Hobby } from '../src/hobbies/hobby.entity';

export class CreateHobbiesTable1572248160722 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.manager.insert(Hobby, [
      { name: 'Karaoke' },
      { name: 'Table tennis' },
      { name: 'Building' },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const data = await queryRunner.manager.find(Hobby);
    if (data.length) {
      await queryRunner.manager.delete(Hobby, data);
    }
  }

}

import { MigrationInterface, QueryRunner } from 'typeorm';
import { Hobby } from '../src/hobbies/hobby.entity';

export class CreateHobbiesTable1572248160722 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.manager.insert(Hobby, [
      { name: '3D printing' },
      { name: 'Acrobatics' },
      { name: 'Acting/Drama' },
      { name: 'Air sports' },
      { name: 'American football' },
      { name: 'Animals and pets' },
      { name: 'Archery' },
      { name: 'Arts' },
      { name: 'Astronomy' },
      { name: 'Auto racing' },
      { name: 'Backgammon' },
      { name: 'Baseball' },
      { name: 'Basketball' },
      { name: 'Blogging' },
      { name: 'BMX' },
      { name: 'Board games' },
      { name: 'Bodybuilding' },
      { name: 'Building' },
      { name: 'Calligraphy' },
      { name: 'Camping' },
      { name: 'Canoeing' },
      { name: 'Card games' },
      { name: 'Cars' },
      { name: 'Chess' },
      { name: 'Childcare' },
      { name: 'Club leadership' },
      { name: 'Coding/Programming' },
      { name: 'Coffee' },
      { name: 'Collecting' },
      { name: 'Cooking' },
      { name: 'Crafts' },
      { name: 'Cricket' },
      { name: 'Cycling' },
      { name: 'Dancing' },
      { name: 'Drawing' },
      { name: 'Driving' },
      { name: 'Electronics' },
      { name: 'Fashion' },
      { name: 'Fishing' },
      { name: 'Flowers' },
      { name: 'Football' },
      { name: 'Gambling' },
      { name: 'Games' },
      { name: 'Golf' },
      { name: 'Hiking' },
      { name: 'Hunting' },
      { name: 'Ice skating' },
      { name: 'Internet Technologies' },
      { name: 'Investing' },
      { name: 'Karaoke' },
      { name: 'Knitting' },
      { name: 'Languages' },
      { name: 'Lego building' },
      { name: 'Martial arts' },
      { name: 'Meditation' },
      { name: 'Mountain biking' },
      { name: 'Mountain climbing' },
      { name: 'Musical instrument' },
      { name: 'Online classes' },
      { name: 'Origami' },
      { name: 'Painting' },
      { name: 'Parachuting' },
      { name: 'Paragliding' },
      { name: 'Photography' },
      { name: 'Pottery' },
      { name: 'Puzzles' },
      { name: 'Reading' },
      { name: 'Recycling' },
      { name: 'Robotics' },
      { name: 'Rock climbing' },
      { name: 'Running/Jogging' },
      { name: 'Sailing' },
      { name: 'Singing' },
      { name: 'Skiing' },
      { name: 'Skydiving' },
      { name: 'Snooker/Pool' },
      { name: 'Socialising' },
      { name: 'Squash' },
      { name: 'Swimming' },
      { name: 'Table tennis' },
      { name: 'Tennis' },
      { name: 'Traveling' },
      { name: 'Video games' },
      { name: 'Volunteering' },
      { name: 'Yoga' },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const data = await queryRunner.manager.find(Hobby);
    if (data.length) {
      await queryRunner.manager.delete(Hobby, data);
    }
  }

}

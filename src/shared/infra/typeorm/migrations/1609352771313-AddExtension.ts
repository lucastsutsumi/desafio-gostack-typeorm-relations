import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AddExtension0000000000001 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public`,
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public`,
    );
  }
}

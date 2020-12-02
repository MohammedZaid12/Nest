import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class UsersTable1606720741492 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
     
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // queryRunner.query(`DROP TABLE user`);
    }

}

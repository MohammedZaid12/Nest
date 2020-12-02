import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterUserTable1606805985803 implements MigrationInterface {
    name = 'AlterUserTable1606805985803'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `email` text NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `password` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
     
    }

}

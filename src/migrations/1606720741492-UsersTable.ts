import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UsersTable1606720741492 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
            columns:[
                {
                    name: 'id',
                    type: 'int4',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                  },
                  {
                    name: 'fullName',
                    type: 'varchar',
                    isNullable: false,
                  },
                  
            ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

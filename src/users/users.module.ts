import { User } from './user.entit';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  exports:[TypeOrmModule],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
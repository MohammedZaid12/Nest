import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from 'src/users/user.entit';
import { Auth } from './auth.entit';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule.register({
    defaultStrategy: 'jwt',
    property: 'user',
    session: false
  }),
  JwtModule.register({
    secret: process.env.SECRETKEY, signOptions: {
      expiresIn: process.env.EXPIRESIN,

    },
  }),],
  exports: [TypeOrmModule,PassportModule,JwtModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }

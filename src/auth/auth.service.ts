import { JwtPayload } from './../helper/jwtPayload';
import { User } from './../users/user.entit';
import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './auth.entit';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private authRepository: Repository<User>, private jwtService: JwtService) { }

    async login(user: Auth) {
        const { email, password } = user;
        const data = await this.authRepository.findOne({ where: { email } });
        if (!data) {
            let errorResponse = new HttpException('User not found', HttpStatus.UNAUTHORIZED);
            return {
                errorMessage: errorResponse.getResponse(),
                status: errorResponse.getStatus()
            };

        }

        const areEqual = await bcrypt.compare(user.password, data.password);
        if (!areEqual) {
            let errorResponse = new HttpException('Invalid credentials given', HttpStatus.UNAUTHORIZED);
            return {
                errorMessage: errorResponse.getResponse(),
                status: errorResponse.getStatus()
            };
        }
        const returnResponse = {
            ...this.token(data),
            Id: data.id,
            name: data.fullName,
            email: data.email,
            RegisteredOn: new Date(data.createdDate).toDateString()
        };
        return {
            message: "User logged In",
            user: returnResponse
        }

    }

    private token({ email }: Auth) {
        let user: JwtPayload = { email };
        let accessToken = this.jwtService.sign(user);
        return {
            expiresIn: '1000',
            accessToken,
        };
    }

    async findByPayload({ email }: any): Promise<User> {
        return await this.authRepository.findOne({  
            where: { email }
        });
    }



}

import { User } from './../users/user.entit';
import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './auth.entit';
import * as bcrypt from 'bcryptjs';



@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private authRepository: Repository<User>) { }

    async login(user: Auth){
        const data = await this.authRepository.findOne(user.email);
        if (!data) {
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
        }
        const areEqual = await bcrypt.compare(user.password, data.password);
        if (!areEqual) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);    
        }
        
    }


}

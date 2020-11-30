import { User } from './user.entit';
import { Injectable, Inject, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    getUser(id: number) {
        return this.usersRepository.find({
            where: [{ "id": id }]
        });
    }

    getUsers() {
        return this.usersRepository.find();
    }
    addUsers(data: User): number {
        const user = this.usersRepository.create(data);
        this.usersRepository.save(data);
        return user.id;
    }
    removeUser(id: string) {
        this.usersRepository.delete(id);
    }
    async updateUser(id:number , user:User ){
     return await this.usersRepository.update(id,user);
     
    }


}
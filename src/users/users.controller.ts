import { User } from './user.entit';
import { Controller, Post, Body, Get, Put, Delete, Param, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get()
    async getUsers() {
        return {
            status: HttpStatus.OK,
            data: await this.service.getUsers(),
        };
    }
    @Get(':id')
    async getUser(@Param() params) {
        return {
            status: HttpStatus.OK,
            data: await this.service.getUser(params.id),
        }
    }
    @Post()
    async createUser(@Body() data: User) {

        return {
            status: HttpStatus.OK,
            message: 'User succesfully added',
            data: await this.service.addUsers(data),
        };
    }
    @Delete(':id')
    async deleteUser(@Param() params) {
        return {
            message: 'User deleted successfully',
            data: await this.service.removeUser(params.id)
        }
    }
    @Put(':id/update')
    async updateUser(@Param('id') id , @Body() user: User) {
         await this.service.updateUser(id,user)
        return {
            message: 'User Updated Successfully'
        }
    }

}
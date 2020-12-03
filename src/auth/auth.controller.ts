import { Auth } from './auth.entit';
import { AuthService } from './auth.service';
import { UsersTable1606720741492 } from './../migrations/1606720741492-UsersTable';
import { UsersService } from './../users/users.service';
import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/users/user.entit';

@Controller()
export class AuthController {
    constructor(private authService:AuthService){}
    @Post('login')
    login(@Body() user:Auth){
        
    }
    
}

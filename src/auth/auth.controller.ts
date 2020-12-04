import { Auth } from './auth.entit';
import { AuthService } from './auth.service';
import { Body, Controller, HttpStatus, Post, UsePipes } from '@nestjs/common';
import { User } from 'src/users/user.entit';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }
    @Post('login')
    login(@Body() user: Auth) {
        return this.authService.login(user);
    }
    @Post('register')
    async userRegistration(@Body() userRegistration: User) {
        return {
            status: HttpStatus.OK,
            message: 'User succesfully added',
            data: await this.authService.register(userRegistration),
        };

    }

}

import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('user_blad')
export class UserBladController {

    @UseGuards(AuthGuard("jwt"))
    @Get('me')
    getMe(){
        return 'User info';
    }
}

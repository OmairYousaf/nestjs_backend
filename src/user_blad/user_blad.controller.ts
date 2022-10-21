import { Body, Controller, Get,  Post,  UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { UserDto } from './dto/user.dto';
import { UserBladService } from './user_blad.service';
import { ApiTags } from "@nestjs/swagger";
import { User } from 'src/user/user.model';

@ApiTags('User-Blad')
@UseGuards(JwtGuard)
@Controller('user_blad')
export class UserBladController {
    constructor(private userService:UserBladService){}

   
    @Get('me')
    getMe(@GetUser() user:User){
 
      
        return user;
    }


    @Post('adduser')
    addUser(@Body() dto:UserDto)
    {
        return this.userService.addUser(dto);
    
    }
}

import { Body, Controller, ForbiddenException, Get,  Param,  ParseIntPipe,  Post,  UseFilters,  UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { UserDto } from './dto/user.dto';
import { UserBladService } from './user_blad.service';
import { ApiTags } from "@nestjs/swagger";
import { User } from 'src/user/user.model';
import { HttpExceptionFilter } from 'src/exceptions/app_exception.filter';

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


    @Get(":id")
    @UseFilters(new HttpExceptionFilter())
    addUserWithExcep(
        @Param("id",ParseIntPipe) id:number,)
    {
        if(id<=0)
        {
            throw new ForbiddenException("invalid id");
        }
        else
        return{success:true,id}
        // return this.userService.addUser(dto);
    
    }
}

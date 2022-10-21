import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { emitWarning } from "process";
import { UserService } from "./user.service";

@ApiTags('User')
@Controller('users')
export class UserController{

    constructor(private readonly userService:UserService){}
    
    @Post('adduser')
    insertUser(
        @Body('name') name:String,
        @Body('age') age:number,
        @Body('email') email:String, 

    ){
       const userId= this.userService.insertUser(name,age,email);
       return {
        id:userId,
       }
    }

    @Get('getallusers')
    getAllUsers(){
        return this.userService.getUsers();
    }


    @Get(':userId')
    getUser(
        @Param('userId') userId:String,
    ){
        return this.userService.getUser(userId);
    }


    @Put(':userId')
    updateUser(
        @Param('userId') userId:String,
        @Body('name') name:String,
        @Body('age') age:number,
        @Body('email') email:String,

    ){

        return this.userService.updateUser(userId,name,age,email);



    }

    @Delete(':userId')
    deleteUSer(
        @Param('userId') userId:String,
    ){
        this.userService.deleteUser(userId);

    }

}
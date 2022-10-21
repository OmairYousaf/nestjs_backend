import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Authentication')
@Controller('auth')
export class AuthController{
    constructor(private authService:AuthService){
    }

    @Post('signup')
    signUp(@Body() dto:AuthDto)
    {
        return this.authService.signUp(dto);
    
    }

    @Post('signin')
    signIn(@Body() dto:AuthDto){
       
        return this.authService.signin(dto);
    }
}
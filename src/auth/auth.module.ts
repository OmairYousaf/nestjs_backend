import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
// import {JwtModule} from "@nestjs/

@Module({
    imports:[JwtModule.register({})],
    controllers:[AuthController],
    providers:[AuthService,JwtService],
})
export class AuthModule{}
import { IsEmail,  IsNotEmpty, IsString, } from "class-validator"
export class UserDto{
    @IsEmail()
    @IsNotEmpty()
    email:string;



    @IsString()
    @IsNotEmpty()
    fName:string

    @IsString()
    @IsNotEmpty()
    lName:string
}
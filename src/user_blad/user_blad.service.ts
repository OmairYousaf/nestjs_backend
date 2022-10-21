import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UserDto } from "./dto";
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { JwtService } from "@nestjs/jwt";
import { stringify } from "querystring";
import { ConfigService } from "@nestjs/config";

@Injectable({})
export class UserBladService{
  constructor(
    private prisma:PrismaService,
 
    ){}
  
    async addUser(dto:UserDto){


      try{
      // generate the Password hash...

      // const hash = await argon.hash(dto.email);

      // save new user in db...
      const userModel = await this.prisma.userModel.create({
        data:{
          email:dto.email,
          firstName:dto.fName,
          lastName: dto.lName
        }
      })

      return userModel;
      // return the saved user...
      // return this.signToken(user.id,user.email);
      }
      catch(error){
        if(error instanceof PrismaClientKnownRequestError){
          if(error.code==='P2002')
          {
            throw new ForbiddenException('Credential already Taken...')
          }
        }
        throw error;
      }
   
      
    }


//    async signin(dto:AuthDto){
//       // find user by Email...

//       const user= await this.prisma.user.findUnique({
//         where:{
//           email:dto.email
//         }
//       });

//       // if user does not exist through exception...
//       if(!user){
//         throw new ForbiddenException('Credential Incorrect...');

//       }

//       // compare password...

//       const pwMatched=await argon.verify(user.hash,dto.password);

//       // if pass incorrect through exception...

//       if(!pwMatched){
//         throw new ForbiddenException(
//           'Credentials Incorrect...'
//         );
//       }

//       // send back the user...

      
//       return this.signToken(user.id,user.email);
//    }

//    async signToken(userId:number,
//     email:string):Promise<{ access_token: string}>{
//     const payLoad={
// sub:userId,   // here sub is for unique key in jwt...
// email,

//     }

//     const secret=this.config.get("JWT_SECRET");
//    const token=  await this.jwt.signAsync(payLoad,{
//     expiresIn:'15min',
//     secret:secret,
//   })

//    return {
//     access_token: token,
//    };
//    }
}
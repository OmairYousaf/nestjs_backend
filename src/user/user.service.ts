import { Injectable } from "@nestjs/common";
import {v4 as uuidv4} from 'uuid';
import { User } from "./user.model";


@Injectable()
export class UserService{
    private users:User[]=[];
    insertUser(name:String,age:number,email:String){
        const uid=uuidv4();

        const newUser=new User(uid,name,age,email);
        this.users.push(newUser);
        return uid;


    }

    getUsers(){
        return this.users;
    }

    getUser(id:String){
        return this.getUserById(id)[0];
    }

    updateUser(
        id:String,
        name:String,
        age:number,
        email:String,
    ){

        const [targetUser,index]=this.getUserById(id);
        const newUserParam={
            ...targetUser,name,age,email
        };

        const newUser=new User(newUserParam.id,newUserParam.name,newUserParam.age,newUserParam.email);

        this.users[index]=newUser;
        return newUser;
    }

    private getUserById(id:String) :[User,number]{
        const index=this.users.findIndex((u)=>u.id==id );
        return [this.users[index],index];
    }


    deleteUser(id:String){
        const [_,index]=this.getUserById(id);
        this.users.splice(index,2);
        
            }
    

}
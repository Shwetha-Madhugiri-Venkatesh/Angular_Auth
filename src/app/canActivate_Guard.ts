import { inject } from "@angular/core"
import { AuthorizeUser } from "./Sevices/authorize"
import { User } from "./Models/user";
import { CanActivateFn } from "@angular/router";


export const Authorize_Guards = (login_details:User)=>{
        let users = inject(AuthorizeUser);
        let previousUsers:User[];
        users.fetchUser().subscribe((res:User[])=>{
            previousUsers =res;
        let result:boolean = previousUsers.some((user)=>{return user.email == login_details.email}); 
        if(result){
        users.login(login_details).subscribe((res:User)=>{
            console.log(res);
        })
        }   
        return result; 
        });
        return false;
}
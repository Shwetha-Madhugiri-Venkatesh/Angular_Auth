import { inject, Injectable } from "@angular/core";
import { User } from "../Models/user";
import { HttpClient } from "@angular/common/http";
import { Authorize_Guards } from "../canActivate_Guard";
import { Observable, throwError } from "rxjs";

@Injectable({
    providedIn:'root',
})
export class AuthorizeUser{

    isLogged:boolean=false;

    http:HttpClient = inject(HttpClient);

    fetchUser(){
        return this.http.get("http://localhost:3000/users");
    }

    login(login_details:User){
        // this.fetchUser().subscribe((res:User[])=>{
        // let previousUsers =res;
        // let result:boolean = previousUsers.some((user)=>{return user.email == login_details.email})
        // if(result){
        //     this.isLogged=true
            return this.http.post("http://localhost:3000/users",login_details);
    //     }
    //     });
    }
}
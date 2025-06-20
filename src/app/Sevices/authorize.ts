import { inject, Injectable } from "@angular/core";
import { User } from "../Models/user";
import { HttpClient } from "@angular/common/http";
import { Authorize_Guards } from "../canActivate_Guard";
import { Observable, throwError } from "rxjs";

@Injectable({
    providedIn:'root',
})
export class AuthorizeUser{

    http:HttpClient = inject(HttpClient);
    
    login(login_details:User){
        return this.http.post("http://localhost:3000/users",login_details);
    }

    fetchUser(){
        return this.http.get("http://localhost:3000/users");
    }
}
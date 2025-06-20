import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorizeUser } from '../Sevices/authorize';
import { Authorize_Guards } from '../canActivate_Guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginFlag:boolean=false;

  //authorize:AuthorizeUser = inject(AuthorizeUser);
  constructor(private authorize: AuthorizeUser){}

  login_submit(form:NgForm){
    // this.authorize.login(form.value).subscribe((res)=>{
    //   console.log(res);
    // });
    Authorize_Guards(form.value);
  }

  switch(){
    this.loginFlag=!this.loginFlag;
  }
}

import { inject, NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TaskDetailsComponent } from "./dashboard/task-details/task-details.component";
import { Authorize_Guards } from "./canActivate_Guard";


let routes:Routes = [
    {path:"",component:HomeComponent},
    {path:"Login",component:LoginComponent},
    {path:"Detail",component:TaskDetailsComponent, canActivate:[Authorize_Guards]}, 
    {path:"Home",component:HomeComponent},
    {path:"Dashboard",component:DashboardComponent, canActivate:[Authorize_Guards]},
]
@NgModule({
    imports: [
    RouterModule.forRoot(routes),//registering routes
  ],
  
 exports:[RouterModule],
})
export class RoutingModule{}
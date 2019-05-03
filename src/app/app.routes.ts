import { Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ChatComponent } from "./home/chat/chat.component";
import { FormComponent } from "./home/form/form.component";
import { GraphicComponent } from "./home/graphic/graphic.component";
import { ResponseComponent } from "./home/response/response.component";
import { BackupcomponentComponent } from "./home/backupcomponent/backupcomponent.component";
import { LoginComponent } from "./login/login.component"

export const routes: Routes = [

  {path:'', component: HomeComponent, children: [
    {path:'', component:ChatComponent},
    {path:'form', component:FormComponent},
    {path:'chat', component:ChatComponent},
    {path:'graphic', component:GraphicComponent},
    {path:'response', component:ResponseComponent},
    {path:'backup', component:BackupcomponentComponent},
  ]},
  {path:'login', component:LoginComponent},
  {path:'**', redirectTo:'/login'},

]

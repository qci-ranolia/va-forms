import { Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ChatComponent } from "./home/chat/chat.component";
import { FormComponent } from "./home/form/form.component";
import { FormResolver } from "./home/form/form-resolver.service";
import { GraphicComponent } from "./home/graphic/graphic.component";
import { ResponseComponent } from "./home/response/response.component";
import { BackupcomponentComponent } from "./home/backupcomponent/backupcomponent.component";
import { LoginComponent } from "./login/login.component"

import { BasicinfoComponent } from './home/basicinfo/basicinfo.component';
import { PhyslocComponent } from './home/physloc/physloc.component';
import { ProccapabComponent } from './home/proccapab/proccapab.component';
import { ProdcapacComponent } from './home/prodcapac/prodcapac.component';
import { RdevComponent } from './home/rdev/rdev.component';
import { SafetyComponent } from './home/safety/safety.component';
import { QualityComponent } from './home/quality/quality.component';
import { SupplierComponent } from './home/supplier/supplier.component';
import { TranspComponent } from './home/transp/transp.component';
import { SubmitComponent } from './home/submit/submit.component';
import { AnymoredocComponent } from './home/anymoredoc/anymoredoc.component';
import { AnymoreimagComponent } from './home/anymoreimag/anymoreimag.component';

export const routes: Routes = [
  { path:'', component: HomeComponent, children: [
    { path:'', component:ChatComponent },
    { path:'form', component:FormComponent },
    { path:'chat', component:ChatComponent },
    { path:'graphic', component:GraphicComponent },
    { path:'response', component:ResponseComponent },
    {
      path:'form',
      component:FormComponent,
      children:[
        { path:'basicinformation', component:BasicinfoComponent },
        { path:'physicallocation', component:PhyslocComponent },
        { path:'processcapability', component:ProccapabComponent },
        { path:'productioncapacity', component:ProdcapacComponent },
        { path:'researchanddevelopment', component:RdevComponent },
        { path:'safety', component: SafetyComponent,
          resolve: {
            form: FormResolver
          }
        },
        { path:'quality', component:QualityComponent },
        { path:'suppliers', component:SupplierComponent },
        { path:'transportation', component:TranspComponent },
        { path:'additionalimages', component: AnymoreimagComponent }, 
        { path:'additionaldocuments', component: AnymoredocComponent }, 
        { path:'Submit', component: SubmitComponent }
      ]
    },
    { path:'backup', component:BackupcomponentComponent }
  ]},
  { path:'login', component:LoginComponent },
  { path:'**', redirectTo:'/login' }

]

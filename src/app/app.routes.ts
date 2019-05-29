import { Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ChatComponent } from "./home/chat/chat.component";
import { FormComponent } from "./home/form/form.component";
import { FormResolver } from "./home/form/form-resolver.service";
import { GraphicComponent } from "./home/graphic/graphic.component";
import { ResponseComponent } from "./home/response/response.component";
import { BackupcomponentComponent } from "./home/backupcomponent/backupcomponent.component";
import { LoginComponent } from "./login/login.component"

import { BasicinfoComponent } from './home/form/basicinfo/basicinfo.component';
import { PhyslocComponent } from './home/form/physloc/physloc.component';
import { ProccapabComponent } from './home/form/proccapab/proccapab.component';
import { ProdcapacComponent } from './home/form/prodcapac/prodcapac.component';
import { RdevComponent } from './home/form/rdev/rdev.component';
import { SafetyComponent } from './home/form/safety/safety.component';
import { QualityComponent } from './home/form/quality/quality.component';
import { SupplierComponent } from './home/form/supplier/supplier.component';
import { TranspComponent } from './home/form/transp/transp.component';
import { SubmitComponent } from './home/form/submit/submit.component';
import { AnymoredocComponent } from './home/form/anymoredoc/anymoredoc.component';
import { AnymoreimagComponent } from './home/form/anymoreimag/anymoreimag.component';

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
        { path:'safety', component: SafetyComponent/* ,
          resolve: {
            form: FormResolver
          } */
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

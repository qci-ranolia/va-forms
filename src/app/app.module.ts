import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';

import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
import { APIService } from './service/APIService';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ProjectService } from './service/ProjectService';
import { FormComponent } from "./home/form/form.component";
import { ChatComponent } from "./home/chat/chat.component";
import { GraphicComponent } from "./home/graphic/graphic.component";
import { PopUpComponent } from "./pop-up/pop-up.component";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { ResponseComponent } from "./home/response/response.component";
import { BackupcomponentComponent } from "./home/backupcomponent/backupcomponent.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BackupcomponentComponent,
    FormComponent,
    ChatComponent,
    ResponseComponent,
    GraphicComponent,
    PopUpComponent
  ],
  entryComponents: [PopUpComponent],
  imports: [
    HttpClientModule,
    MatTabsModule,
    MatBottomSheetModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [APIService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule {}

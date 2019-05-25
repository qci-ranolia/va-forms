import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { WebcamModule } from "ngx-webcam";

import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
import { OpentokService } from "./service/Opentok.service";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { FormComponent } from "./home/form/form.component";
import { FormResolver } from "./home/form/form-resolver.service";
import { FormBuilderComponent } from "./home/form/form-builder/form-builder.component";
import { ChatComponent } from "./home/chat/chat.component";
import { GraphicComponent } from "./home/graphic/graphic.component";

import { APIService } from "./service/APIService";
import { ProjectService } from "./service/ProjectService";
//import { MatFileUploadModule } from 'angular-material-fileupload';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";
import { PopUpComponent } from "./pop-up/pop-up.component";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { ResponseComponent } from "./home/response/response.component";
import { BackupcomponentComponent } from "./home/backupcomponent/backupcomponent.component";

import { ImagesComponent } from './home/form/images/images.component';
import { BasicinfoComponent } from './home/basicinfo/basicinfo.component';
import { PhyslocComponent } from './home/physloc/physloc.component';
import { ProccapabComponent } from './home/proccapab/proccapab.component';
import { ProdcapacComponent } from './home/prodcapac/prodcapac.component';
import { RdevComponent } from './home/rdev/rdev.component';
import { SafetyComponent } from './home/safety/safety.component';
import { SupplierComponent } from './home/supplier/supplier.component';
import { TranspComponent } from './home/transp/transp.component';
import { SubmitComponent } from './home/submit/submit.component';
import {DcustomdialogComponent  } from './home/dcustomdialog/dcustomdialog.component';
import { AnymoredocComponent } from './home/anymoredoc/anymoredoc.component';
import { AnymoreimagComponent } from './home/anymoreimag/anymoreimag.component';
import { FilesComponent } from './home/form/files/files.component';

import { ImageCompressService,ResizeOptions, ImageUtilityService } from 'ng2-image-compress';
import { DialComponent } from "./home/chat/dial/dial.component";
import { PublisherComponent } from "./pop-up/publisher/publisher.component";
import { SubscriberComponent } from "./pop-up/subscriber/subscriber.component";
import { ScheduleGraphComponent } from "./home/response/schedule-graph/schedule-graph.component";
import { ScheduleDataComponent } from "./home/response/schedule-data/schedule-data.component";
import { LiveAssesmentComponent } from "./home/response/live-assesment/live-assesment.component";
import { ProfileComponent } from "./home/profile/profile.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { QualityComponent } from './home/quality/quality.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BackupcomponentComponent,
    FormComponent,
    FormBuilderComponent,
    ChatComponent,
    ResponseComponent,
    GraphicComponent,
    PopUpComponent,
    DialComponent,
    PublisherComponent,
    SubscriberComponent,
    ScheduleGraphComponent,
    ScheduleDataComponent,
    LiveAssesmentComponent,
    ProfileComponent,
    ImagesComponent,
    BasicinfoComponent,
    PhyslocComponent,
    ProccapabComponent,
    ProdcapacComponent,
    RdevComponent,
    SafetyComponent,
    SupplierComponent,
    TranspComponent,
    SubmitComponent,
    DcustomdialogComponent,
    AnymoredocComponent,
    AnymoreimagComponent,
    FilesComponent,
    QualityComponent
  ],
  entryComponents: [PopUpComponent, ProfileComponent, ImagesComponent, DcustomdialogComponent, FilesComponent],
  imports: [
    HttpClientModule,
    MatTabsModule,
    MatBottomSheetModule,
    BrowserModule,
    BrowserAnimationsModule,
    WebcamModule,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    // RouterModule.forRoot([
    //   {
    //     path: 'form/safety',
    //     component: SafetyComponent,
    //     resolve: {
    //       form: 'formResolver'
    //     }
    //   }
    // ]),
    RouterModule.forRoot(routes, { useHash: true }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    FormResolver,
    APIService,
    ProjectService,
    OpentokService,
    ImageCompressService,
    ResizeOptions,
    {
      provide: 'FormResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => 'form'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";
import { MatBottomSheet } from "@angular/material";
import { PopUpComponent } from "../../../pop-up/pop-up.component";
import { ProjectService } from "../../../service/ProjectService";
import { OpentokService } from "../../../service/Opentok.service";
import * as OT from "@opentok/client";

@Component({
  selector: "app-dial",
  templateUrl: "./dial.component.html",
  styleUrls: ["./dial.component.scss"]
})
export class DialComponent implements OnInit {
  @Input() user: any;
  userToBeDialed: any;
  session: OT.Session;
  streams: Array<OT.Stream> = [];
  changeDetectorRef: ChangeDetectorRef;
  connected: boolean = true;
  alreadyPublishing: boolean = false;
  copyOfSession: any;

  constructor(
    private ref: ChangeDetectorRef,
    private opentokService: OpentokService,
    private bottomSheet: MatBottomSheet,
    private projectService: ProjectService
  ) {
    this.userToBeDialed = projectService.userToBeDialed;
    localStorage.setItem("form_id",""+this.userToBeDialed.form_id)
    console.log(this.userToBeDialed);
    this.changeDetectorRef = ref;
  }

  checkForExistingSession() {
    if (!this.session && this.projectService.storeCopyOfSession) {
      this.copyOfSession = this.projectService.storeCopyOfSession;
      this.alreadyPublishing = true;
      // console.log(true)
      return true;
    }
  }

  

  ngOnInit() {
    console.log(this.alreadyPublishing);
    console.log(this.session);

    if (!this.projectService.sessionConnected) {
      document.body.className = "bodyActive";
      this.opentokService
        .initSession()
        .then((session: OT.Session) => {
          this.session = session;
          this.projectService.storeCopyOfSession = session;

          session.on("streamCreated", function(event) {
            session.subscribe(event.stream);
            this.connected = true;
          });

          this.session.on("streamDestroyed", event => {
            const idx = this.streams.indexOf(event.stream);
            if (idx > -1) {
              this.streams.splice(idx, 1);
              this.changeDetectorRef.detectChanges();
            }
          });
        })
        .then(() => {
          this.projectService.sessionConnected = true;
          this.opentokService.connect();
        })
        .catch(err => {
          console.error(err);
          alert(
            "Unable to connect. Make sure you have updated the config.ts file with your OpenTok details."
          );
        });
    }
  }

  ngAfterViewInit() {
    this.connected = true;
    let tabElements1 = document.getElementsByClassName(
      "OT_subscriber"
    )[0] as HTMLElement;

    if(tabElements1)
    tabElements1.style.display = "block";

    let tabElements2 = document.getElementsByClassName(
      "OT_publisher"
    )[0] as HTMLElement;

    if(tabElements2)
    tabElements2.style.display = "block";
  }

  ngOnDestroy() {
    console.log("called");
    let tabElements = document.getElementsByClassName(
      "OT_subscriber"
    )[0] as HTMLElement;
    if (tabElements) tabElements.style.display = "none";
  }

  endSession() {
    setTimeout(() => {
      document.body.className = "";
    }, 500);
    setTimeout(() => {
      this.opentokService.disconnect();
      this.connected = false;
      this.projectService.emitUserDial(false);
      let form_id = "";
      if(localStorage.getItem("form_id")){
        form_id = ""+ localStorage.getItem("form_id")
      }
      let data = {
        session_id: this.projectService.openTokCreds.SESSION_ID,
        epoch: new Date().getTime(),
        form_id: form_id
      };
      this.alreadyPublishing = false;
      this.projectService.storeCopyOfSession = null;
      this.projectService.endSession(data);
      let creds = {
        api_key : "",
        session_id : "",
        token : "",
      }
      this.projectService.setOpenTokCredentials(creds)
    }, 600);
  }
}

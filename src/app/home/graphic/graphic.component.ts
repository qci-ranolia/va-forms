import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProjectService } from "../../service/ProjectService";
import { OpentokService } from "../../service/Opentok.service";
import * as OT from "@opentok/client";

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent implements OnInit {

  response =[]
  sessionConnected = false
  session: OT.Session;
  streams: Array<OT.Stream> = [];
  changeDetectorRef: ChangeDetectorRef;
  alreadyPublishing: boolean = false;
  copyOfSession: any;
  form_id: any;
  displayLiveResponse = false;

  constructor(
    private ref: ChangeDetectorRef,
    private opentokService: OpentokService,
    private projectService: ProjectService
  ) {
    this.changeDetectorRef = ref
    this.projectService.emitGemVideoCall.subscribe(res=>{
      this.response = res
    })

    // this.response = [
    //         {
    //             "api_key": "46333322",
    //             "chat_time": 1560166433,
    //             "form_id": "1000",
    //             "session_id": "2_MX40NjMzMzMyMn5-MTU2MDI0MzkyODg1MX55Y21iWlI2YnhNUnNWM3djUFlJOUI0SXB-fg",
    //             "token_gem": "T1==cGFydG5lcl9pZD00NjMzMzMyMiZzaWc9NDY4NGU0MGQzZjE0NjQ1ZjdlYjRkM2VlOTZkYmM4ZjdkNDg5ZmQ0ODppbml0aWFsX2xheW91dF9jbGFzc19saXN0PSZub25jZT03MTAwJnNlc3Npb25faWQ9Ml9NWDQwTmpNek16TXlNbjUtTVRVMk1ESTBNemt5T0RnMU1YNTVZMjFpV2xJMlluaE5Vbk5XTTNkalVGbEpPVUkwU1hCLWZnJmV4cGlyZV90aW1lPTE1NjAzMzAzMjkmY3JlYXRlX3RpbWU9MTU2MDI0MzkyOSZyb2xlPXB1Ymxpc2hlcg=="
    //         },
    //         {
    //             "api_key": "46333322",
    //             "chat_time": 1560239438,
    //             "form_id": "110",
    //             "session_id": "2_MX40NjMzMzMyMn5-MTU2MDMyNjIyMTcwMH5PSGVibTl6TG9tU1VtMUlZR3diZC9kdW9-fg",
    //             "token_gem": "T1==cGFydG5lcl9pZD00NjMzMzMyMiZzaWc9MmEyNjU2ZWUwZmMxYTczZjFjM2ZlODEyNzQxNjFmMGE4MWVlMWJjNTpub25jZT05NjYyMTYmc2Vzc2lvbl9pZD0yX01YNDBOak16TXpNeU1uNS1NVFUyTURNeU5qSXlNVGN3TUg1UFNHVmliVGw2VEc5dFUxVnRNVWxaUjNkaVpDOWtkVzktZmcmZXhwaXJlX3RpbWU9MTU2MDQxMjYyMSZyb2xlPXB1Ymxpc2hlciZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PSZjcmVhdGVfdGltZT0xNTYwMzI2MjIx"
    //         }
    //     ]

  }

  ngOnInit() {

    this.displayLiveResponse = false;
    this.form_id = "123"

    this.projectService.getGemVideoCall()

    if (this.sessionConnected) {
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
    let tabElements1 = document.getElementsByClassName(
      "OT_subscriber"
    )[0] as HTMLElement;

    if(tabElements1)
    tabElements1.style.display = "block";
  }

  getvideo(res) {

    this.displayLiveResponse = true;
    this.form_id = res.form_id;
    if(this.opentokService){
      this.opentokService.disconnect();
    }

    let tabElements = document.getElementsByClassName(
      "OT_subscriber"
    )[0] as HTMLElement;
    if (tabElements) tabElements.style.display = "none";


    this.sessionConnected = true
    this.projectService.setOpenTokCredentials(res)

    if (this.sessionConnected) {

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

          let tabElements1 = document.getElementsByClassName(
            "OT_subscriber"
          )[0] as HTMLElement;

          if(tabElements1)
          tabElements1.style.display = "block";

          this.opentokService.connect();

          let tabElements2 = document.getElementsByClassName(
            "OT_subscriber"
          )[0] as HTMLElement;

          if(tabElements2)
          tabElements2.style.display = "block";


        })
        .catch(err => {
          console.error(err);
          alert(
            "Unable to connect. Make sure you have updated the config.ts file with your OpenTok details."
          );
        });
    }

  }

  ngOnDestroy() {
    let tabElements = document.getElementsByClassName(
      "OT_subscriber"
    )[0] as HTMLElement;
    if (tabElements) tabElements.style.display = "none";
  }

}

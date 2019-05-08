import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MatBottomSheet } from "@angular/material";
import { PopUpComponent } from "../../../pop-up/pop-up.component";
import { ProjectService } from "../../../service/ProjectService";
import { OpentokService } from '../../../service/Opentok.service';
import * as OT from '@opentok/client';

@Component({
  selector: 'app-dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.scss']
})
export class DialComponent implements OnInit {

  @Input() user:any;
  userToBeDialed: any;
  session: OT.Session;
  streams: Array<OT.Stream> = [];
  changeDetectorRef: ChangeDetectorRef;
  connected : boolean = true;

  constructor(private ref: ChangeDetectorRef, private opentokService: OpentokService, private bottomSheet: MatBottomSheet, private projectService: ProjectService) {
    // this.bottomSheet.open(PopUpComponent);
    this.userToBeDialed = projectService.userToBeDialed
    console.log(this.userToBeDialed)
    this.changeDetectorRef = ref;
  }

  ngOnInit () {

    this.opentokService.initSession().then((session: OT.Session) => {
      this.session = session;

      session.on("streamCreated", function(event) {
        session.subscribe(event.stream);

        let tabElements1 = document.getElementsByClassName("OT_subscriber")[1] as HTMLElement;
        tabElements1.style.display = 'none'
        let tabElements2 = document.getElementsByClassName("OT_subscriber")[2] as HTMLElement;
        tabElements2.style.display = 'none'
        let tabElements3 = document.getElementsByClassName("OT_subscriber")[3] as HTMLElement;
        tabElements3.style.display = 'none'
        let tabElements4 = document.getElementsByClassName("OT_subscriber")[4] as HTMLElement;
        tabElements4.style.display = 'none'


      });

      this.session.on('streamDestroyed', (event) => {
        const idx = this.streams.indexOf(event.stream);
        if (idx > -1) {
          this.streams.splice(idx, 1);
          this.changeDetectorRef.detectChanges();
        }
      });

    })
    .then(() =>
    this.opentokService.connect())
    .catch((err) => {
      console.error(err);
      alert('Unable to connect. Make sure you have updated the config.ts file with your OpenTok details.');
    });

  }

  ngAfterViewInit() {
    this.connected = true;
    let tabElements = document.getElementsByClassName("OT_subscriber")[0] as HTMLElement;
    tabElements.style.height = "100px !important";
    tabElements.style.display = 'block'
    console.log(tabElements.style.height)

    let tabElements1 = document.getElementsByClassName("OT_subscriber")[1] as HTMLElement;
    tabElements1.style.display = 'none'
    let tabElements2 = document.getElementsByClassName("OT_subscriber")[2] as HTMLElement;
    tabElements2.style.display = 'none'
    let tabElements3 = document.getElementsByClassName("OT_subscriber")[3] as HTMLElement;
    tabElements3.style.display = 'none'
    let tabElements4 = document.getElementsByClassName("OT_subscriber")[4] as HTMLElement;
    tabElements4.style.display = 'none'

  }

  ngOnDestroy() {
    console.log("called")
    let tabElements = document.getElementsByClassName("OT_subscriber")[0] as HTMLElement;
    if(tabElements)
    tabElements.style.display = 'none'
  }

  endSession() {
    this.opentokService.disconnect()
    this.connected = false;
    this.projectService.emitUserDial(false)
  }

}

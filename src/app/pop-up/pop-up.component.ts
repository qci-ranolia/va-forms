import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ProjectService } from "../service/ProjectService";
import { OpentokService } from '../service/Opentok.service';
import * as OT from '@opentok/client';

@Component({
  selector: "app-pop-up",
  templateUrl: "./pop-up.component.html",
  styleUrls: ["./pop-up.component.scss"]
})
export class PopUpComponent implements OnInit {

  session: OT.Session;
  streams: Array<OT.Stream> = [];
  changeDetectorRef: ChangeDetectorRef;

  constructor(private ref: ChangeDetectorRef, private opentokService: OpentokService) {
    // this.opentokService.disconnect();
    this.changeDetectorRef = ref;
  }

  ngOnInit () {
    this.opentokService.initSession().then((session: OT.Session) => {
      this.session = session;
      this.session.on('streamCreated', (event) => {
        this.streams.push(event.stream);
        this.changeDetectorRef.detectChanges();
      });

      session.on("streamCreated", function(event) {
        session.subscribe(event.stream);
        this.changeDetectorRef.detectChanges();
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

  ngOnDestroy() {}

}

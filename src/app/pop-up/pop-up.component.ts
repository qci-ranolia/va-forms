import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ProjectService } from "../service/ProjectService";

@Component({
  selector: "app-pop-up",
  templateUrl: "./pop-up.component.html",
  styleUrls: ["./pop-up.component.scss"]
})
export class PopUpComponent implements OnInit {

  constructor() {
  }

  ngOnInit () {}

  ngOnDestroy() {}
}

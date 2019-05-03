import { Component, OnInit } from "@angular/core";
import { MatBottomSheet } from "@angular/material";
import { PopUpComponent } from "../../pop-up/pop-up.component";
@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  constructor(private bottomSheet: MatBottomSheet) {}

  ngOnInit() {}
  openBottomSheet(): void {
    this.bottomSheet.open(PopUpComponent);
  }
}

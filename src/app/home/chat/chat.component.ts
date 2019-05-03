import { Component, OnInit } from "@angular/core";
import { MatBottomSheet } from "@angular/material";
import { PopUpComponent } from "../../pop-up/pop-up.component";
import { ProjectService } from "../../service/ProjectService";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {

  chatUsers: any = [];

  constructor(private projectService: ProjectService, private bottomSheet: MatBottomSheet) {
    this.projectService.emitChatUsers.subscribe(res=>{
      this.chatUsers = res.chatUsers
      console.log(this.chatUsers)
    })
  }

  openBottomSheet(): void {
    this.bottomSheet.open(PopUpComponent);
  }

  ngOnInit() {
    this.projectService.getChatUsers()
  }

  contactThisUser(chatUser) {
    console.log(chatUser)
  }

}

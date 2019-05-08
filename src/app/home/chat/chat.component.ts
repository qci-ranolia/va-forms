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
  dialUser: boolean = false;
  contactUser: any = {}

  constructor(private projectService: ProjectService, private bottomSheet: MatBottomSheet) {
    this.projectService.emitChatUsers.subscribe(res=>{
      this.chatUsers = res.chatUsers
      this.dialUser = res.dialUser
    })

    this.projectService.emitDialUser.subscribe(res=>{
      this.dialUser = res.dialUser
    })
  }

  ngOnInit() {
    this.projectService.getChatUsers()
    // this.projectService.getChatUsers()
  }

  contactThisUser(chatUser) {
    console.log(chatUser)
    this.contactUser = chatUser
    this.projectService.emitUserDial(true)
    this.projectService.emitDialUserDetailsTOComponent(chatUser)
  }

}

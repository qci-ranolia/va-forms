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

      // if(res.userCalling){
      //   this.userCalling(res.userCalling)
      // }

    })

    this.projectService.emitDialUser.subscribe(res=>{
      this.dialUser = res.dialUser
    })
  }

  ngOnInit() {
    this.projectService.getChatUsers()
  }

  contactThisUser(chatUser) {
    console.log(chatUser)
    this.contactUser = chatUser
    this.bottomSheet.open(PopUpComponent);
    setTimeout(()=>{
      this.projectService.emitUserDial(true)

      this.projectService.emitDialUserDetailsTOComponent(chatUser)

      // this.bottomSheet.dismiss(PopUpComponent)

    }, 2000)
  }

  userCalling() {
    this.bottomSheet.open(PopUpComponent);
  }

}

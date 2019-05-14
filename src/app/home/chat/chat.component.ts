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
  chatUser: any = {}

  constructor(private projectService: ProjectService, private bottomSheet: MatBottomSheet) {
    this.projectService.emitChatUsers.subscribe(res=>{
      this.chatUsers = res.chatUsers.all_user_data
      this.dialUser = res.dialUser
      console.log(res)

      // if(res.userCalling){
      //   this.userCalling(res.userCalling)
      // }

    })

    this.projectService.emitDialUser.subscribe(res=>{
      this.dialUser = res.dialUser
    })

    this.projectService.emitDismissPopup.subscribe(res=>{
      if(res.dismiss === "true"){

        this.projectService.emitUserDial(true)
        this.projectService.emitDialUserDetailsTOComponent(this.chatUser)
        this.bottomSheet.dismiss()
      }
    })
  }

  ngOnInit() {
    this.projectService.getChatUsers()
  }

  contactThisUser(chatUser) {
    console.log(chatUser)
    this.chatUser = chatUser
    this.contactUser = chatUser
    this.bottomSheet.open(PopUpComponent);
    let data = {
      participant_id: chatUser.user_id,
      chat_name: "chat_name_1",
      chat_id: "chat_id_"+Math.floor(Math.random() * (9999 - 1000)) + 1000,
      start_time : (new Date).getTime()
    }
    this.projectService.initiateSession(data)

    // setTimeout(()=>{
    //
    //   this.projectService.emitUserDial(true)
    //   this.projectService.emitDialUserDetailsTOComponent(chatUser)
    //   this.bottomSheet.dismiss()
    //
    // }, 2000)
  }

  receiveCall(user) {
    this.projectService.setOpenTokCredentials(user)
    this.projectService.emitUserDial(true)
    this.projectService.emitDialUserDetailsTOComponent(user)

  }

  userCalling() {
    this.bottomSheet.open(PopUpComponent);
  }

}

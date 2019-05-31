import { Component, OnInit } from "@angular/core";
import { MatBottomSheet } from "@angular/material";
import { PopUpComponent } from "../../pop-up/pop-up.component";
import { ProjectService } from "../../service/ProjectService";
import { Howl, Howler } from 'howler';

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

  ringtone: any;


  constructor(private projectService: ProjectService, private bottomSheet: MatBottomSheet) {

    this.projectService.emitChatUsers.subscribe(res=>{
      this.chatUsers = res.chatUsers.all_user_data
      this.dialUser = res.dialUser
      console.log(res)

      if(res.chatUsers) {
        // check for any call
        if(res.chatUsers.all_user_data.length > 0)
        this.checkForCall()
      }
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

  checkForCall() {

    let callingFlag = false;

    console.log(this.chatUsers)

    if(this.chatUsers.length) {
      for(let user=0; user< this.chatUsers.length; user++) {

        console.log(this.chatUsers[user].status)
        console.log(!this.dialUser)

        if(this.chatUsers[user].status === "calling" && !this.dialUser) {
          console.log("calling")
          callingFlag = true;
          break;
        }
      }
    }

    if(callingFlag) {

      this.projectService.userCalling(true)

      // this.ringtone = new Howl({
      //     src: ['./assets/ringtone/ring1.ogg'],
      //     autoplay: true,
      //     loop: true
      //   });
      //   this.ringtone.play()
    } else{
      this.projectService.userCalling(false)
    }

  }

  checkForFormID(chatUser) {
    if(chatUser.form_id)
    localStorage.setItem("form_id", ""+chatUser.form_id)
  }

  contactThisUser(chatUser) {
    console.log(chatUser)
    this.chatUser = chatUser
    this.contactUser = chatUser
    this.bottomSheet.open(PopUpComponent);

    let form_id = "";
    if(localStorage.getItem('form_id')) {
      form_id = ""+localStorage.getItem('form_id')
    }
    let data = {
      calling_user_id: chatUser.user_id,
      chat_time: chatUser.chat_time,
      // chat_id: "chat_id_"+Math.floor(Math.random() * (9999 - 1000)) + 1000,
      form_id: form_id
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
    // this.ringtone.unload()
    this.projectService.setOpenTokCredentials(user)
    this.projectService.emitUserDial(true)
    this.projectService.emitDialUserDetailsTOComponent(user)
    this.projectService.userCalling(false)

  }

  userCalling() {
    this.bottomSheet.open(PopUpComponent);
  }

}

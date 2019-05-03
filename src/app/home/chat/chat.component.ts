import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../service/ProjectService";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chatUsers: any = [];

  constructor(private projectService: ProjectService) {
    this.projectService.emitChatUsers.subscribe(res=>{
      this.chatUsers = res.chatUsers
      console.log(this.chatUsers)
    })
  }

  ngOnInit() {
    this.projectService.getChatUsers()
  }

  contactThisUser(chatUser) {
    console.log(chatUser)
  }

}

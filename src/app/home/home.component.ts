import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatBottomSheet } from "@angular/material";
import { ProfileComponent } from "./profile/profile.component";
import { ProjectService } from "../service/ProjectService";
import { Howl, Howler } from 'howler';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  isEmail : boolean = false

  email: any = "";
  user_role:any = "";
  calling = false;
  checkForCall: any;
  // ringtone = new Howl({
  //   src: ['./assets/ringtone/ring1.ogg'],
  //   autoplay: true,
  //   loop: true
  // });

  constructor(private router: Router, private bottomSheet: MatBottomSheet, private projectService: ProjectService) {
    this.projectService.emitCalling.subscribe(res=>{
      if(res){
        this.calling = res.calling
        this.checkForRingtone(this.calling)
      }
    })
  }

  checkForRingtone(calling) {

    // this.ringtone.autoplay = calling

    if(calling) {
    // this.ringtone.play()
    } else {
      // this.ringtone.unload()
    }
  }

  profileComponent() {
    this.bottomSheet.open(ProfileComponent);
  }

  ngOnInit() {

    this.projectService.checkLogin()

    this.email = localStorage.getItem("email") + "";
    if (this.email == null || this.email == 'null' ) this.isEmail = false
    else this.isEmail = true

    if(localStorage.getItem("role")) {
      this.user_role = localStorage.getItem("role")+""
      console.log(this.user_role)

      if(this.user_role === "gem"){

      } else {
        console.log("User role is "+ this.user_role)
        this.checkForCall = setInterval(()=>{
          // console.log("chat")
          this.projectService.getChatUsers()
        }, 6000)
      }
    }
  }

  ngOnDestroy() {
    clearInterval(this.checkForCall)
  }

}

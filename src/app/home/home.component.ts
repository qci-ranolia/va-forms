import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatBottomSheet } from "@angular/material";
import { ProfileComponent } from "./profile/profile.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  isEmail : boolean = false

  email: any = "";
  user_role:any = "";

  constructor(private router: Router, private bottomSheet: MatBottomSheet) {}

  profileComponent() {
    this.bottomSheet.open(ProfileComponent);
  }

  ngOnInit() {
    this.email = localStorage.getItem("email") + "";
    if (this.email == null || this.email == 'null' ) this.isEmail = false
    else this.isEmail = true

    if(localStorage.getItem("role")) {
      this.user_role = localStorage.getItem("role")+""
      console.log(this.user_role)
    }
  }
}

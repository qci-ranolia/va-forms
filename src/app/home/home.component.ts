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

  constructor(private router: Router, private bottomSheet: MatBottomSheet) {}

  profileComponent() {
    // localStorage.clear();
    // this.router.navigate(["/login"]);
    this.bottomSheet.open(ProfileComponent);
  }

  ngOnInit() {
    this.email = localStorage.getItem("email") + "";
    if (this.email == null || this.email == 'null' ) this.isEmail = false
    else this.isEmail = true
  }
}

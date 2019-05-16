import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  isEmail : boolean = false
  
  email: any = "";

  constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

  ngOnInit() {
    this.email = localStorage.getItem("email") + "";
    if (this.email == null || this.email == 'null' ) this.isEmail = false
    else this.isEmail = true
  }
}

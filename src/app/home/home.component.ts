import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  email: any = "";

  constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

  ngOnInit() {
    this.email = localStorage.getItem("email") + "";
  }
}

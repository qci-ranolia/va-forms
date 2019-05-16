import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user_name : any = ""

  constructor(private router: Router) {
    this.user_name = localStorage.getItem("email");
  }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

}

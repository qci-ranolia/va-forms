import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../service/ProjectService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email : any = "";
  password: any = "";
  constructor(private projectService: ProjectService, private router: Router) {
    this.projectService.checkLogin()
    this.projectService.emitUserLogin.subscribe((res)=>{
      console.log(res)
      this.router.navigate(['/']);  
    });
  }

  ngOnInit(){ }

  login() {
    console.log(this.email)
    console.log(this.password)
    let data = {
      user_name: this.email,
      password: this.password
    }
    this.projectService.login(data);
  }

}

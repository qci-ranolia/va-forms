import { NgForm } from '@angular/forms';
import { APIService } from './APIService';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter, Injectable, } from '@angular/core';
import { HttpEvent, HttpEventType, HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ProjectService {

  dialUser = false;
  userToBeDialed = {};
  emitUI : EventEmitter<any> = new EventEmitter<any>();
  emitDialUser : EventEmitter<any> = new EventEmitter<any>();
  emitUserLogin : EventEmitter<any> = new EventEmitter<any>();
  emitChatUsers : EventEmitter<any> = new EventEmitter<any>();
  emitDialUserDetails : EventEmitter<any> = new EventEmitter<any>();

  constructor(private APIService: APIService, private route: ActivatedRoute, private router: Router) {}

  HttpEventResponse(event) {
    // console.log(event)
    switch (event.type) {
      case HttpEventType.Sent:
        // console.log('Request started');
        break;
      case HttpEventType.ResponseHeader:
        // console.log('Headers received ->', event.headers);
        break;
      case HttpEventType.DownloadProgress:
        const loaded = Math.round(event.loaded / 1024);
        // console.log(`Downloading ${ loaded } kb downloaded`);
        break;
      case HttpEventType.Response:
        // console.log('Finished -> ', event.body);
        return event.body;
    }
  }

  login(data){
    this.APIService.Login(data).subscribe((event: HttpEvent<any>) => {

      let response = this.HttpEventResponse(event)
      if(response){
        console.log(response)
        if(response.success){
          localStorage.setItem("token", response.token+"")
          this.emitUserLogin.emit({login:'true'});
        }
      }
    }, (err:HttpErrorResponse)=>{
      console.log(err)
    });
  }

  checkLogin() {

    if(localStorage.getItem('token'))
    this.router.navigate(['/']);
  }

  getChatUsers() {
    this.APIService.GetChatUsers().subscribe((event: HttpEvent<any>) => {

      let response = this.HttpEventResponse(event)
      if(response) {
        console.log(response)
        this.emitChatUsers.emit({
          chatUsers: response,
          dialUser: this.dialUser
        })
      }
    })
  }

  emitUserDial(flag) {
    this.dialUser = flag;
    this.emitDialUser.emit(
      {dialUser : this.dialUser}
    )
  }

  emitDialUserDetailsTOComponent(user) {
    this.userToBeDialed = user
    this.emitDialUserDetails.emit({
      user: this.userToBeDialed
    })
  }

  startArchive(data) {
    this.APIService.StartArchive(data).subscribe((event: HttpEvent<any>)=>{
      let response = this.HttpEventResponse(event)
      if(response)
      console.log(response)
    })
  }

}

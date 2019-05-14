import { EventEmitter, Injectable } from '@angular/core';
import { HttpEvent, HttpEventType, HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { APIService } from './APIService';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class ProjectService {
  res:any
  emitResponses: EventEmitter<any> = new EventEmitter<any>();
  emitQuestions: EventEmitter<any> = new EventEmitter<any>();

  dialUser = false;
  userToBeDialed = {};
  openTokCreds = {
    API:"",
    SESSION_ID:"",
    TOKEN:""
  }
  emitUI : EventEmitter<any> = new EventEmitter<any>();
  emitDialUser : EventEmitter<any> = new EventEmitter<any>();
  emitUserLogin : EventEmitter<any> = new EventEmitter<any>();
  emitChatUsers : EventEmitter<any> = new EventEmitter<any>();
  emitDismissPopup : EventEmitter<any> = new EventEmitter<any>();
  emitDialUserDetails : EventEmitter<any> = new EventEmitter<any>();

  constructor( private APIService: APIService, private route: ActivatedRoute, private router: Router ) {}

  HttpEventResponse(event) {
    switch (event.type) {
      case HttpEventType.Sent:
        break;
      case HttpEventType.ResponseHeader:
        break;
      case HttpEventType.DownloadProgress:
        const loaded = Math.round(event.loaded / 1024);
        break;
      case HttpEventType.Response:
        return event.body;
    }
  }
    
  get_admin_ui(){
    this.APIService.Get_Admin_UI().subscribe((event: HttpEvent<any>) =>{
      let response = this.HttpEventResponse(event)
      if(response){
        this.emitQuestions.emit(response.data)
      } else {
        // alert('else tru while emitQuestions')
        // Some info to user;
      }
    }, (err) => {
      // alert('err tru while emitQuestions')
      // Some info to users;
    })
  }
    
  updateParameterResponse(temp){
    this.APIService.updateParameterResponse(temp).subscribe((event: HttpEvent<any>) =>{
      let response = this.HttpEventResponse(event)
      if(response){
        console.log("updateParameterResponse suc ",response)
        //this.emitUI.emit(response)
      } else {
        console.log("updateParameterResponse else err ",response)
        // Some info to user;
      }
    }, (err) => {
        console.log("updateParameterResponse err ", err)
        // Some info to users;
    })
  }

  postRadio(temp){
    this.APIService.post_Radio(temp).subscribe((event: HttpEvent<any>) =>{
      let response = this.HttpEventResponse(event)
      if(response){
        this.emitUI.emit(response)
      } else {
        // Some info to user;
      }
    }, (err) => {
      // Some info to users;
    })
  }

  postTextDetails(temp){
    this.APIService.postTextDetails(temp).subscribe((event: HttpEvent<any>) =>{
      let response = this.HttpEventResponse(event)
      if(response){
        console.log("postTextDetails suc ",response)
        //this.emitUI.emit(response)
      } else {
        console.log("postTextDetails else err ",response)
        // Some info to user;
      }
    }, (err) => {
        console.log("postTextDetails err ", err)
        // Some info to users;
    })
  }

  response(){
    this.res = [
      {
        project_name:"Machine survey form",
        project_submitted_by:"submitted",
        project_submition_date:"10/12/2018",
        project_info:{
          info1:"Machine survey",
          info2:"form in machine",
          info3:"survey forms",
          info4:"submit form"
        }
      },
      {
        project_name:"Open Defication",
        project_submitted_by:"submitted",
        project_submition_date:"10/12/2018",
        project_info:{
          info1:"open defication",
          info2:"submit",
          info3:"View OD",
          info4:"info"
        }
      },
      {
        project_name:"google toilet locator",
        project_submitted_by:"submitted",
        project_submition_date:"10/12/2018",
        project_info:{
          info1:"Google toilet",
          info2:"Located areas",
          info3:"info",
          info4:"Google project"
        }
      },
      {
        project_name:"Swach bharat mission",
        project_submitted_by:"submitted",
        project_submition_date:"10/12/2018",
        project_info:{
          info1:"Swach Areas",
          info2:"Mission Swach",
          info3:"View details",
          info4:"info"
        }
      }
    ]
    this.emitResponses.emit(this.res)
  }


  login(data){
    this.APIService.Login(data).subscribe((event: HttpEvent<any>) => {
      let response = this.HttpEventResponse(event)
      if(response){
        console.log(response)
        if(response.success){
          localStorage.setItem("token", response.token+"")
          localStorage.setItem("email", data.email+"")
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

  initiateSession(data) {
    this.APIService.InitiateSession(data).subscribe((event: HttpEvent<any>)=>{
      let response = this.HttpEventResponse(event)
      if(response) {
        console.log(response)
        if(response.success) {
          this.setOpenTokCredentials(response)
          this.emitDismissPopupFunction()
        }
      }
    })
  }

  setOpenTokCredentials(response) {
    this.openTokCreds = {
      API:response.api_key,
      SESSION_ID:response.session_id,
      TOKEN:response.token
    }
  }

  emitDismissPopupFunction() {
    this.emitDismissPopup.emit({
      dismiss: "true"
    })
  }

  endSession(data) {
    this.APIService.EndSession(data).subscribe((event: HttpEvent<any>) => {

      let response = this.HttpEventResponse(event)
      if(response){
        console.log(response)
        this.getChatUsers()
      }
    }, (err:HttpErrorResponse)=>{
      console.log(err)
    });
  }

}

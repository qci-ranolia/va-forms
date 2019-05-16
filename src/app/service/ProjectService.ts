import { EventEmitter, Injectable } from '@angular/core';
import { HttpEvent, HttpEventType, HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { APIService } from './APIService';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class ProjectService {
  res:any
  emitQuestions: EventEmitter<any> = new EventEmitter<any>();

  dialUser = false;
  userToBeDialed = {};
  openTokCreds = {
    API:"",
    SESSION_ID:"",
    TOKEN:""
  }
  storeCopyOfSession : any;
  sessionConnected = false;
  emitUI : EventEmitter<any> = new EventEmitter<any>();
  emitDialUser : EventEmitter<any> = new EventEmitter<any>();
  emitUserLogin : EventEmitter<any> = new EventEmitter<any>();
  emitChatUsers : EventEmitter<any> = new EventEmitter<any>();
  emitDismissPopup : EventEmitter<any> = new EventEmitter<any>();
  emitDialUserDetails : EventEmitter<any> = new EventEmitter<any>();
  emitFilledDetails : EventEmitter<any> = new EventEmitter<any>();
  emitImageData_Id : EventEmitter<any> = new EventEmitter<any>();
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
        // alert("Try again later")
        // alert('else tru while emitQuestions')
        // Some info to user;
      }
    }, (err) => {
        // alert("Try again later.")      
      // alert('err tru while emitQuestions')
      // Some info to users;
    })
  }
    
  // updateParameterResponse(temp){
  //   // console.log(temp)
  //   this.APIService.updateParameterResponse(temp).subscribe((event: HttpEvent<any>) =>{
  //     let response = this.HttpEventResponse(event)
  //     if(response){
  //       console.log("updateParameterResponse suc ",response)
  //       //this.emitUI.emit(response)
  //     } else {
  //       console.log("updateParameterResponse else err ",response)
  //       // Some info to user;
  //     }
  //   }, (err) => {
  //       console.log("updateParameterResponse err ", err)
  //       // Some info to users;
  //   })
  // }

  postFormDetails(temp){
    this.APIService.postFormDetails(temp).subscribe((event: HttpEvent<any>) =>{
      let response = this.HttpEventResponse(event)
      if(response){
        localStorage.setItem(response.question_id, response.data_id)
        // this.emitData_id.emit(response)
      } else {
        // alert("Try again later")
        // Some info to user;
      }
    }, (err) => {
      // alert("Try again later.")
        // Some info to users;
    })
  }

  filledDetails(temp){
    this.APIService.filledDetails(temp).subscribe((event: HttpEvent<any>) =>{
      let response = this.HttpEventResponse(event)
      
      console.log(response)
      if(response){
        // localStorage.setItem(response.question_id, response.data_id)
        this.emitFilledDetails.emit(response)
      } else {
        // alert("Try again later")
        // Some info to user;
      }
    }, (err) => {
      // alert("Try again later.")
        // Some info to users;
    })
  }

  imageArray(temp){
    this.APIService.postFormDetails(temp).subscribe((event: HttpEvent<any>) =>{
      let response = this.HttpEventResponse(event)
      
      if(response){
        let x = {
          data_id:response.data_id,
          
        }
        // localStorage.setItem(response.question_id, response.data_id)
        this.emitImageData_Id.emit(response.data_id)
      } else {
        // alert("Try again later")
        // Some info to user;
      }
    }, (err) => {
      // alert("Try again later.")
        // Some info to users;
    })
  }

  submitResponse(temp){
    this.APIService.postFormDetails(temp).subscribe((event: HttpEvent<any>) =>{
      let response = this.HttpEventResponse(event)
      if(response){
        localStorage.setItem(response.question_id, response.data_id)
        // this.emitData_id.emit(response)
      } else {
        // alert("Try again later")
        // Some info to user;
      }
    }, (err) => {
      // alert("Try again later.")
        // Some info to users;
    })
  }
  deleteImage(temp){
    this.APIService.deleteImage(temp).subscribe((event: HttpEvent<any>) =>{
      let response = this.HttpEventResponse(event)
      if(response){
        localStorage.removeItem("form_id")
        // this.emitData_id.emit(response)
      } else {
        // alert("Try again later")
        // Some info to user;
      }
    }, (err) => {
      // alert("Try again later.")
        // Some info to users;
    })
  }

  login(data){
    this.APIService.Login(data).subscribe((event: HttpEvent<any>) => {
      let response = this.HttpEventResponse(event)
      if(response){
        console.log(response)
        if(response.success){
          localStorage.setItem("token", response.token+"")
          localStorage.setItem("email", data.user_name+"")
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
          if(response.form_id){
            localStorage.setItem('form_id',""+response.form_id)
          }
          this.setOpenTokCredentials(response)
          this.emitDismissPopupFunction()
          let archiveData = {
            chat_id: data.chat_id,
            chat_name: data.chat_name,
            session_id: response.session_id,
            has_video: true,
            has_audio: true
          }
          // this.startArchive(archiveData).subscribe((event: HttpEvent<any>)=>{
          //   let response = this.HttpEventResponse(event)
          //   if(response) {
          //     console.log("Video Archive")
          //     console.log(response)
          //   }
          // })
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
    localStorage.setItem('form_id',""+response.form_id)
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
        this.sessionConnected = false;
        console.log(response)
        this.getChatUsers()
      }
    }, (err:HttpErrorResponse)=>{
      console.log(err)
    });
  }

}

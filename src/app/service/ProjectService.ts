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
  emitData_id : EventEmitter<any> = new EventEmitter<any>();
  emitDialUser : EventEmitter<any> = new EventEmitter<any>();
  emitUserLogin : EventEmitter<any> = new EventEmitter<any>();
  emitChatUsers : EventEmitter<any> = new EventEmitter<any>();
  emitLiveResponse : EventEmitter<any> = new EventEmitter<any>();
  emitDismissPopup : EventEmitter<any> = new EventEmitter<any>();
  emitDialUserDetails : EventEmitter<any> = new EventEmitter<any>();
  emitVendorDetails : EventEmitter<any> = new EventEmitter<any>();
  emitImageData_Id : EventEmitter<any> = new EventEmitter<any>();
  emitCycleVideo: EventEmitter<any> = new EventEmitter<any>();

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


  vendorDetails(temp){
    this.APIService.vendorDetails(temp).subscribe((event: HttpEvent<any>) => {
      let response = this.HttpEventResponse(event)
      if( response ){
        // localStorage.setItem(response.question_id, response.data_id)
        this.emitVendorDetails.emit(response)
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
        this.emitImageData_Id.emit(response)
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
          localStorage.setItem("role", response.role+"")
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

  checkFormStatus() {

    return localStorage.getItem('form_status')
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
      if(response){
        console.log("Archive video")
        console.log(response)
      }
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
            session_id: response.session_id,
            form_id: response.form_id,
            has_video: true,
            has_audio: true
          }

          setTimeout(()=>{
          //  this.startArchive(archiveData)
          }, 4000)
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

  emitLiveResponseFun(response){
    this.emitLiveResponse.emit({
      response: response
    })
  }

  getLiveAssesment(data) {
    this.APIService.GetLiveAssesment(data).subscribe((event: HttpEvent<any>) => {

      let response = this.HttpEventResponse(event)
      if(response){
        // console.log(response)
        this.emitLiveResponseFun(response)
      }
    }, (err:HttpErrorResponse)=>{
      console.log(err)
    });
  }

  getCycleVideo() {
    this.emitCycleVideo.emit({
      cycle: "video"
    })
  }

}

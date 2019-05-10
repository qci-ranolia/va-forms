import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpErrorResponse, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class APIService {
  token : string
  headers : any
  opts : any
  request : any

  projectURL: string = '../assets/APIData/';
  UI_JSON: string = '../assets/UI_JSON/';
  localURL: string = 'http://192.168.15.237:3000';
  localURL2: string = 'http://192.168.15.161:5000';
  current_URL : string = this.localURL;
  Header: any;
  appHeader: any = new HttpHeaders({ 'Autherization'  : 'true' });

  // UI_JSON: string = '../assets/';
  api_url: "http://192.168.15.146:5000/"
  
  constructor(private http: HttpClient) {}

  setHeader() {
    let token = localStorage.getItem('token');
    // console.log(token);
    this.appHeader = new HttpHeaders({'token': ""+token});
    this.appHeader.append({'Content-Type':'application/json'});
    // console.log(token);
  }

  Login(data) {
    data = JSON.stringify(data);
    const request = new HttpRequest('POST', this.current_URL+"/login", data , { reportProgress: true, headers: this.appHeader });
    return this.http.request(request)
  }

  GetChatUsers() {
    const request = new HttpRequest('GET', this.current_URL+"/chat_users", { reportProgress: true, headers: this.appHeader });
    return this.http.request(request)
  }

  StartArchive(data) {
    const request = new HttpRequest('POST', this.localURL2+"/opentok/archive", data , { reportProgress: true, headers: this.appHeader });
    return this.http.request(request)
  }
  
  Get_Admin_UI(){
    const request = new HttpRequest('GET', "http://192.168.15.146:5000/opentok/getform" , { reportProgress: true })
    return this.http.request(request)
  }

  post_Radio(data:any){
    const request = new HttpRequest('POST', this.UI_JSON+'fields.json', JSON.stringify(data), { reportProgress: true })
    return this.http.request(request)
  }
  
}

import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpErrorResponse, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()

export class APIService {
  token : string
  headers : any
  opts : any
  request : any

  projectURL: string = '../assets/APIData/';
  UI_JSON: string = '../assets/UI_JSON/';
  localURL: string = 'http://localhost:3000';
  proURL: string = 'http://192.168.15.139:8000';
  current_URL : string = this.localURL;
  Header: any;
  appHeader: any = new HttpHeaders({ 'Autherization'  : 'true' });

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

}

import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import {
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpEventType,
  HttpErrorResponse,
  HttpResponse,
  HttpHeaders,
  HttpParams
} from "@angular/common/http";

@Injectable()
export class APIService {
  token: string;
  headers: any;
  opts: any;
  request: any;
  projectURL: string = 'http://192.168.15.146:5000/opentok/'; // ../assets/fields.json
  projectURL2: string = "https://assessment.qcin.org/opentok/";
  UI_JSON: string = '../assets/UI_JSON/';
  localURL: string = 'http://localhost:3000';
  // localURL2: string = 'https://13.234.223.215';
  localURL2: string = 'https://assessment.qcin.org';
  // localURL2: string = 'http://192.168.15.146:5000';
  // localURL2: string = 'http://192.168.15.161:5000';
  current_URL : string = this.localURL;

  Header: any;
  appHeader: any = new HttpHeaders({ Authorization: "true" });

  // UI_JSON: string = '../assets/';
  api_url: "http://192.168.15.146:5000/"

  constructor(private http: HttpClient) {}

  setHeader() {
    let token = localStorage.getItem("token");
    // console.log(token);
    this.appHeader = new HttpHeaders({ Authorization: "" + token });
    this.appHeader.append({ "Content-Type": "application/json" });
    // console.log(token);
  }

  Login(data) {
    console.log('s')
    data = JSON.stringify(data);
    const request = new HttpRequest(
      "POST",
      this.localURL2 + "/opentok/login",
      data,
      { reportProgress: true }
    );
    return this.http.request(request);
  }

  GetChatUsers() {
    this.setHeader();
    const request = new HttpRequest(
      "GET",
      this.localURL2 + "/opentok/getUsers",
      { reportProgress: true, headers: this.appHeader }
    );
    return this.http.request(request);
  }

  StartArchive(data) {
    this.setHeader();
    const request = new HttpRequest(
      "POST",
      this.localURL2 + "/opentok/archive",
      data,
      { reportProgress: true, headers: this.appHeader }
    );
    return this.http.request(request);
  }

  GetLiveAssesment(data) {
    this.setHeader()
    const request = new HttpRequest('POST', this.localURL2+"/opentok/filleddetails", data, { reportProgress: true, headers: this.appHeader })
    console.log(this.http.request(request))
    return this.http.request(request)
  }

  Get_Admin_UI(){
    this.setHeader()
    const request = new HttpRequest('GET', this.projectURL+"getform", { reportProgress: true, headers: this.appHeader  }) 
    return this.http.request(request)
  }
  
  postFormDetails(data:any){
    this.setHeader()
    const request = new HttpRequest('POST', this.projectURL+"submitresponse", data, { reportProgress: true, headers: this.appHeader })//, headers: this.appHeader
    return this.http.request(request)
  }
  vendorDetails(data:any){
    this.setHeader()
    const request = new HttpRequest('POST', this.projectURL+"vendordetails", data, { reportProgress: true, headers: this.appHeader })//, headers: this.appHeader
    return this.http.request(request)

  }
  deleteImage(data:any){
    this.setHeader()
    const request = new HttpRequest('POST', this.projectURL+"deleteimage", data, { reportProgress: true, headers: this.appHeader })//, headers: this.appHeader
    return this.http.request(request)
  }
  submitResponse(data:any){
    this.setHeader()
    const request = new HttpRequest('POST', this.projectURL+"submit", data, { reportProgress: true, headers: this.appHeader })//, headers: this.appHeader
    return this.http.request(request)
  }
  InitiateSession(data) {
    this.setHeader();
    const request = new HttpRequest(
      "POST",
      this.localURL2 + "/opentok/createSession",
      data,
      { reportProgress: true, headers: this.appHeader }
    );
    return this.http.request(request);
  }

  EndSession(data) {
    this.setHeader();
    const request = new HttpRequest(
      "POST",
      this.localURL2 + "/opentok/disconnectSession",
      data,
      { reportProgress: true, headers: this.appHeader }
    );
    return this.http.request(request);
  }

}

import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpErrorResponse, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class APIService {
    UI_JSON: string = '../assets/';
    api_url: "http://192.168.15.146:5000/"
    constructor( private http: HttpClient ) {}

    Get_Admin_UI(){
        const request = new HttpRequest('GET', "http://192.168.15.146:5000/opentok/getform" , { reportProgress: true })
        return this.http.request(request)
    }

    post_Radio(data:any){
        const request = new HttpRequest('POST', this.UI_JSON+'fields.json', JSON.stringify(data), { reportProgress: true })
        return this.http.request(request)
    }

}
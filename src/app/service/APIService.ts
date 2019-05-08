import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpErrorResponse, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class APIService {
    UI_JSON: string = '../assets/';
    constructor( private http: HttpClient ) {}

    Get_Admin_UI(){
        const request = new HttpRequest('GET', this.UI_JSON+'fields.json', {}, { reportProgress: true });
        return this.http.request(request)
    }

}
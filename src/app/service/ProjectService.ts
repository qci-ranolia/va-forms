import { EventEmitter, Injectable } from '@angular/core';
import { HttpEvent, HttpEventType, HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ProjectService {
    res:any
    emitUI : EventEmitter<any> = new EventEmitter<any>();
    emitChatUsers: EventEmitter<any> = new EventEmitter<any>();
    emitResponses: EventEmitter<any> = new EventEmitter<any>();

    // constructor() {}

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

}
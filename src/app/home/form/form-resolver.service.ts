import { HttpEvent, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { APIService } from '../../service/APIService';
import { ProjectService } from '../../service/ProjectService';
// import { HttpEvent, HttpEventType, HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class FormResolver implements Resolve<any> {

  constructor(private http: HttpClient, private ProjectService: ProjectService, private APIService: APIService) { }

  resolve(): Observable<any> {
    
    // return this.http.post(newsUrl, news).pipe(
    //   map( (dataFromApi) => dataFromApi ),
    //   catchError( (err) => Observable.throw(err.json().error) )
    // )

      let form_id = localStorage.getItem('form_id')
      // let physical_location_question_id = localStorage.getItem('question_id')
      
      if (form_id){
        // this.local_form_id = true
        // this.APIService.vendorDetails({form_id:form_id})//"this.form_id"
        this.APIService.vendorDetails({form_id:form_id}).subscribe((event: HttpEvent<any>) => {
            let response = this.ProjectService.HttpEventResponse(event)
            if(response){
                localStorage.setItem("form_status", response.form_status)
                let data = response.data
                let subSectionKeys :any = Object.keys(data)
                let all_question_ids = []
                for (let i = 0; i < subSectionKeys.length; i++){
                let name = subSectionKeys[i]
                let x=[]
                for ( let datas in data[name]){
                    let pLData:any =  data[name][datas]
                    x.push(pLData.question_id)
                    console.log(pLData.question_id, pLData.data )
                    localStorage.setItem(pLData.question_id, JSON.stringify(pLData.data))
                    all_question_ids.push(pLData.question_id)
                }
                localStorage.setItem(name, JSON.stringify(x))
                }
                localStorage.setItem("questionIds", JSON.stringify(all_question_ids))
            } else {
              // alert("Try again later")
              // Some info to user;
            }
          }, (err) => {
            // alert("Try again later.")
              // Some info to users;
        })
      } else {
        console.error("%c Form id couldnt be found","color: #f44'")
        // this.local_form_id = false
      }
      return of()
  }
  //Meant to check status of the form, if its  false, Edits can be made else all will be disabled
//   storeFormStatatus(form_status){
//     console.log("Form status for this form is is ", form_status)
//     localStorage.setItem("form_status", form_status)
//   }

//   storeVendorDetail(data){
//     let subSectionKeys :any = Object.keys(data)
//     let subSectionData :any
//     let all_question_ids = []
//     for (let i = 0; i < subSectionKeys.length; i++){
//       let name = subSectionKeys[i]
//       let x=[]
//       for ( let datas in data[name]){
//         let pLData:any =  data[name][datas]
//         x.push(pLData.question_id)
//         console.log(pLData.question_id, pLData.data )
//         localStorage.setItem(pLData.question_id, JSON.stringify(pLData.data))
//         all_question_ids.push(pLData.question_id)
//       }
//       localStorage.setItem(name, JSON.stringify(x))
//     }
//     // this.storeQuestionIds(all_question_ids)
//     localStorage.setItem("questionIds", JSON.stringify(all_question_ids))
//   }
    //   storeQuestionIds(question_ids){
    //     localStorage.setItem("questionIds", JSON.stringify(question_ids))
    //   }


}
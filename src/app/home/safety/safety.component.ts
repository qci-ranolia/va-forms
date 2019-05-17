import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material';
import { APIService } from '../../service/APIService';
import { ProjectService } from '../../service/ProjectService';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.scss']
})
export class SafetyComponent implements OnInit {
  conditions : string[] = ["Yes", "No"];
  firstCondYes:any
  firstCondNo:any
  secondCondYes:any
  secondCondNo:any

  safetyQuestionId:any="ecaa9527b69d881f6a6aa0c4e3659b15"
  extnQuestionId:any="3fa8e450cbb4de5a877d15948f4470b1"
  
  form_id:any
  constructor( private ProjectService: ProjectService, private APIService: APIService ) { }

  ngOnInit() {
    this.form_id = localStorage.getItem('form_id')
    let x = Boolean(this.storedQuestionId(this.safetyQuestionId)[0].src)
    let y = Boolean(this.storedQuestionId(this.safetyQuestionId)[0].src)
    if (x){
      this.firstCondYes = x
      console.log("FirstCondYes is ", this.firstCondYes)
    } else {
      console.log("FirstCondNo is ", this.firstCondNo)
      this.firstCondNo = !x
    }
    if (y){
      console.log("secondCondYes is ", this.secondCondYes)
      this.secondCondYes = y
    } else {
      console.log("secondCondNo is ", this.secondCondNo)
      this.secondCondNo = !y
    }
    
  }

  storedQuestionId(questionId){
    let storedData : any = JSON.parse(localStorage.getItem(questionId))

    if (storedData.length != 0){
      console.log("storedData is ", storedData)
      return storedData
    } 
    return [{"src":null,"data_id":null }]
  }

  clickSafety(event:MatRadioChange ) {
    let data_id : any = localStorage.getItem(this.safetyQuestionId)
    var temp = {
      form_id: this.form_id,
      question_id: this.safetyQuestionId,
      file_data:event.value,
      is_submit:false,
      data_id:data_id
    }
    this.postRequest(temp)
    // return this.subquestions
  }

  clickExtn(event:MatRadioChange ) {
    let data_id : any = localStorage.getItem(this.extnQuestionId)
    var temp = {
      form_id: this.form_id,
      question_id: this.extnQuestionId,
      file_data: event.value,
      is_submit:false,
      data_id:data_id
    }
    this.postRequest(temp)
    // return this.subquestions
  }

  postRequest(temp){
    this.APIService.postFormDetails(temp).subscribe((event: HttpEvent<any>) =>{
      let response = this.ProjectService.HttpEventResponse(event)
      if(response){
        localStorage.setItem(temp.question_id, JSON.stringify({"src": temp.file_data, "data_id" :response.data_id}))
        console.log(response)
      } else {
        console.log(response)
      }
    }, (err) => {
      console.log("err is ", err)
    })
  }

}

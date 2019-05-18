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
  firstCond: any = false
  secondCond:any = false

  isDisabled: boolean = false

  firstCondDataId: any
  secondCondDataId:any 
  safetyQuestionId:any="ecaa9527b69d881f6a6aa0c4e3659b15"
  extnQuestionId:any="3fa8e450cbb4de5a877d15948f4470b1"
  
  form_id:any
  constructor( private ProjectService: ProjectService, private APIService: APIService ) { 




  }

  ngOnInit() {
    this.form_id = localStorage.getItem('form_id')
    let firstCondData = this.storedQuestionId(this.safetyQuestionId)[0]
    this.firstCond = firstCondData.src 
    this.firstCondDataId = firstCondData.data_id

    let secondCondData = this.storedQuestionId(this.extnQuestionId)[0]
    
    this.secondCond = secondCondData.src 
    this.secondCondDataId = secondCondData.data_id


    console.log(this.firstCond)
    console.log(this.secondCond)
  }

  storedQuestionId(questionId){
    let storedData : any = JSON.parse(localStorage.getItem(questionId))

    if (storedData.length != 0){
      console.log("questionidis for ", questionId)      
      console.log("storedData is for ", storedData)
      return storedData
    } 
    return [{"src":null,"data_id":null }]
  }

  clickSafety(event:MatRadioChange ) {
    //let data : any = localStorage.getItem(this.safetyQuestionId)
    console.log("Click safety clicked")
    var temp = {
      form_id: this.form_id,
      question_id: this.safetyQuestionId,
      file_data:event.value,
      is_submit:false,
      data_id: this.firstCondDataId
    }
    this.postRequest(temp)
    // return this.subquestions
  }

  clickExtn(event:MatRadioChange ) {
    console.log("Click ext clicked clicked")

    //let data: any = localStorage.getItem(this.extnQuestionId)
    var temp = {
      form_id: this.form_id,
      question_id: this.extnQuestionId,
      file_data: event.value,
      is_submit:false,
      data_id: this.secondCondDataId
    }
    this.postRequest(temp)
    // return this.subquestions
  }

  postRequest(temp){
    console.log(temp)

      this.APIService.postFormDetails(temp).subscribe((event: HttpEvent<any>) =>{
      let response = this.ProjectService.HttpEventResponse(event)
      if(response){
        console.log(response)
        localStorage.setItem(temp.question_id, JSON.stringify({"src": temp.file_data, "data_id" : response.data_id}))

      } 
    }, (err) => {
      console.log("err is ", err)
    })
  }

}

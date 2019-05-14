import { Component, OnInit } from '@angular/core';
import { copyStyles } from 'v3/opentiktokapp/node_modules/@angular/animations/browser/src/util';
import { MatRadioChange } from '@angular/material';
import { ProjectService } from '../../service/ProjectService';
// import * as fs from 'fs'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  images = new Array()
  
  conditions : string[] = ['Yes', 'No'];
  parameters : any;
  
  showSubQuestions : boolean = false
  subquestions : any;
  
  sync : boolean = true
  imgPreview : boolean = true

  para_array : any
  param_name : any
  param_id : any
  param_ques_index : any
  response : any
  
  imageName : any
  videoName : any
  
  constructor( private ProjectService: ProjectService ){
    this.ProjectService.emitQuestions.subscribe(res => {
      this.response = res
      this.para_array = Object.keys(res)
      // console.log(res)
    })
    // this.para_array = ["1","2","3","4","5","6","7","8"]
  }

  ngOnInit(){
    this.ProjectService.get_admin_ui()
  }

  checkAndUpdate(i){
    // Hit api
    var temp = {
      "form_id":[
        {
          "parameter_id":[
            {
              "question_id":"ahjdashj",
              "question_response":"Geotagged Assessment"
            }
          ]
        }
      ]
    }
    
    // this.ProjectService.updateParameterResponse(temp)
    for ( let j = 0; j < this.para_array.length; j++ ){
      if ( i == this.para_array[j] ) {
        // this.param_id = set it to a value
        this.showSubQuestions = true
        this.subquestions = this.response[i]
        this.param_name = i
        return this.subquestions
      } else {
        this.param_name = null
        this.showSubQuestions = false
      }
    }
  }

  saveRadioWithSubQues( id, event:MatRadioChange ){
    this.sync = false
    // this.param_ques_index = id
    var temp = {
      id: id,
      parameter_name: this.param_name,
      value: event.value
    }
    if ( event.value == 'Yes' ) {
      this.ProjectService.postRadio(temp)
      return this.subquestions
    }
    this.sync = true
  }

  textDetails(id, $event){
     var temp = {
      id: id,
      parameter_name: this.param_name,
      value: $event.target.value
    }
    // this.ProjectService.postTextDetails(temp)
  }

  // uploadDocument( id, $event ){
  //   var element : HTMLElement = document.getElementById(id+'+1') as HTMLElement;
  //   element.innerText = "Please hold on for a moment..."
  //   var element : HTMLElement = document.getElementById(id) as HTMLElement;
  //   element.click()
  // }

  browseImages( id, $event ){
    this.imgPreview = false
    let files = $event.target.files || $event.srcElement.files;
    for ( let i = 0; i < $event.target.files.length; i++ ){
      let reader = new FileReader()
      reader.readAsDataURL(files[i])
      reader.onload = (event:any) => {
        this.images.push(reader.result)
      }
    }
    console.log(this.images)
    return this.images
  }

  // imageNameFunc(id){
  //   var a
  //   return this.imageName
  // }
  
  /*
  uploadVideo( id, $event ){
    this.videoName = "Please hold on for a moment..."
    var element : HTMLElement = document.getElementById(id) as HTMLElement;
    element.click()
  }
  
  browseVideo( id, $event ){
    this.videoName = $event.target.value
    this.sync = true
    this.sync = false
  }
  */

}
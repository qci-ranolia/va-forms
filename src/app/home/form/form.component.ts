import { Component, OnInit } from '@angular/core';
import { copyStyles } from 'v3/opentiktokapp/node_modules/@angular/animations/browser/src/util';
import { MatRadioChange } from '@angular/material';
import { ProjectService } from '../../service/ProjectService';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  images : any
  
  conditions : string[] = ['Yes', 'No'];
  parameter : any;
  
  showSubQuestions : boolean = false
  subquestions : any;
  
  sync : boolean = true
  imgPreview : boolean = true
  showFreeze : boolean = true

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
      // this.form_id
    })

    this.ProjectService.emitData_id.subscribe(res => {
      console.log(res)
      // this.response = res
      // this.para_array = Object.keys(res)
      // this.form_id
    })
    // this.para_array = ["physical_location", "basic_information", "process_capability", "suppliers","production_capability", "research_and_development"]
    // this.subquestions = [
    //   {
    //     "research_and_development":[
    //         {
    //             "id":"fddfahjdashj",
    //             "question":"Show the R&D facility.",
    //             "options":"photo"
    //         },
    //         {
    //             "id":"bmbahjdashj",
    //             "question":"Show the products/processes for which patents have been obtained.",
    //             "options":"photo"
    //         },
    //         {
    //             "id":"zxczahjdashj",
    //             "question":"Show prototype if any.",
    //             "options":"photo"
    //         }
    //     ]
    //   } 
    // ]

  }

  ngOnInit(){
    this.ProjectService.get_admin_ui()
  }

  checkAndUpdate(i){
    // Hit api
    var temp = {
      "form_id":"something",
      "parameter_id":"something",
      "question_id":"something",
      "response":"something"
    }
    // this.ProjectService.updateParameterResponse(this.images)
    this.images = ''
    for ( let j = 0; j < this.para_array.length; j++ ) {
      if ( i == this.para_array[j] ) {
        if ( j+1 == this.para_array.length ) this.showFreeze = false
        else this.showFreeze = true
        // this.param_id = set it to a value
        this.showSubQuestions = true
        this.subquestions = this.response[i]
        this.param_name = i
        // console.log(this.subquestions)
        return this.subquestions
      } else {
        this.param_name = null
        this.showSubQuestions = false
      }
    }
  }

  freeze() {
    var temp = {
      "some data":"1",
      "somedata":"1",
      "sodata":"2",
      "somata":"3",
      "somta":"3"
    }
    // this.ProjectService.freeze(temp)
  }

  saveRadioWithSubQues( id, event:MatRadioChange ){
    // this.sync = false
      // this.param_ques_index = id
    var temp = {
      form_id: 'form_id_01',
      question_id: id,
      file_data: event.value,
      is_submit:false,
      data_id:null
    }
    if ( event.value == 'Yes' ) {
      this.ProjectService.postFormDetails(temp)
      return this.subquestions
    }
    this.sync = true
  }

  textDetails(id, $event){
    var temp = {
      form_id: 'form_id_01',
      question_id: id,
      file_data: $event.target.value,
      is_submit:false,
      data_id:null
    }
    this.ProjectService.postFormDetails(temp)
    console.log(localStorage.getItem("formResponse"))  
  }

  browseImages( id, $event, pos ){
    this.imgPreview = true
    let files = $event.target.files || $event.srcElement.files
    let src : any;    
    let data_id : any = localStorage.getItem(id)
    console.log(data_id)
    
    let reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onload = (event:any) => {
      this.images = reader.result
      this.subquestions[pos].src = reader.result
      var temp = {
        form_id: 'form_id_01',
        question_id: id,
        file_data: this.images,
        is_submit:false,
        data_id:data_id
      }
      this.ProjectService.postFormDetails(temp)
      console.log(localStorage.getItem("formResponse"))
    }
    // console.log(this.subquestions[pos].src)
    
    this.imgPreview = false
    
    // console.log(this.subquestions[pos].src)
    if ( this.subquestions[0].quantity ){
      // if ((this.images.length+1) == this.subquestions[0].quantity ) alert("Uploaded "+this.subquestions[0].quantity+ " images.")
      // alert("upload only "+this.subquestions[0].quantity+" images.")
    }
    // this.ProjectService.sendImages(temp)
    // return this.images
  }

  /* ltr(id){
    if (this.subquestions[0].id == id ){
      for ( let y = 0 ; y < this.images.length; y++ ){
        var x = document.createElement("img")
        x.setAttribute('class', 'col-2')
        x.setAttribute('src', this.images[y])
        var element : HTMLElement = document.getElementById(id) as HTMLElement;
        element.appendChild(x)
        // console.log(element)
      }
    }
  }
  
  */
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
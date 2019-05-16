import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { MatRadioChange } from '@angular/material';
import { ProjectService } from '../../service/ProjectService';
import { ImagesComponent } from './images/images.component' 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  images : any
  imagesArray = new Array()
  imagesCounter : any
  form_id:any

  conditions : string[] = ['Yes', 'No'];
  parameter : any;

  showSubQuestions : boolean = false
  subquestions : any;

  local_form_id : boolean = false
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

  @ViewChild('parent', { read: ViewContainerRef }) container: ViewContainerRef; 

  constructor( private _cfr: ComponentFactoryResolver, private ProjectService: ProjectService ){
    this.ProjectService.emitQuestions.subscribe(res => {
      this.response = res
      this.para_array = Object.keys(res)
      // this.form_id
    })

    // this.ProjectService.emitData_id.subscribe(res => {
    //   console.log(res)
    //   // this.response = res
    //   // this.para_array = Object.keys(res)
    //   // this.form_id
    // })
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
    this.form_id = localStorage.getItem('form_id')
    if (this.form_id){
      this.local_form_id = true
    } else {
      this.local_form_id = false
    }
    
  }


  addComponent(id){
    // check and resolve the component
    var comp = this._cfr.resolveComponentFactory(ImagesComponent);
    // Create component inside container
    var expComponent = this.container.createComponent(comp);
    // see explanations
    expComponent.instance.question_id = id;
    expComponent.instance._ref = expComponent;
  }
  

  checkAndUpdate(i){
    // Hit api for syncing
    // var temp = {
    //   "form_id":"something",
    //   "parameter_id":"something",
    //   "question_id":"something",
    //   "response":"something"
    // }
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

  submitResponse(){
    var temp = {
      assessor_id:'assessor_id_01',
      assessor_name:'assessor_name_01',
      vendor_id:'vendor_id_01',
      vendor_name:'vendor_name_01',
      form_id:this.form_id,
      is_submit:true
    }
    this.ProjectService.submitResponse(temp)
  }

  saveRadioWithSubQues( id, event:MatRadioChange ) {
    let data_id : any = localStorage.getItem(id)
    console.log(data_id)
    var temp = {
      form_id: this.form_id,
      question_id: id,
      file_data: event.value,
      is_submit:false,
      data_id:data_id
    }
    this.ProjectService.postFormDetails(temp)
    return this.subquestions
    // this.sync = true
  }

  textDetails(id, $event){
    let data_id : any = localStorage.getItem(id)
    console.log(data_id)
    var temp = {
      form_id: this.form_id,
      question_id: id,
      file_data: $event.target.value,
      is_submit : false,
      data_id: data_id
    }
    this.ProjectService.postFormDetails(temp)
  }

  browseImages( id, $event, pos ){
    this.imgPreview = false
    let files = $event.target.files || $event.srcElement.files
    let src : any;
    let data_id : any = localStorage.getItem(id)
    let reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onload = (event:any) => {
      this.images = reader.result
      // this.imagesArray.push(reader.result)
      this.subquestions[pos].src = reader.result
      var temp = {
        form_id : this.form_id,
        question_id : id,
        file_data : this.images,
        is_submit : false,
        data_id : data_id
      }
      this.ProjectService.postFormDetails(temp)
      this.ProjectService.postFormDetails(temp)

    }
    // setTimeout(function() {
      // console.log(this.imagesArray)
      // console.log(this.imagesArray.length)
    // }, 100)
    
    // if (this.subquestions[0].quantity){
    //   // console.log(this.subquestions[0].quantity)
    //   this.imagesArray
    //   // return some data
    // }
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

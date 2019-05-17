import { Component, OnInit, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
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
  physical_location_question_id:any

  presentData:any


  index: number = 0;

  form_response:any
  form_response_array:any
  response_subquestions:any

  @ViewChild('parent', { read: ViewContainerRef }) container: ViewContainerRef; 
  
  constructor( private _cfr: ComponentFactoryResolver, private ProjectService: ProjectService ){
    
    this.ProjectService.emitVendorDetails.subscribe(el=>{
      this.form_response = el
      this.form_response_array = Object.keys(el)
      this.storeVendorDetail(el)
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
    this.ProjectService.emitQuestions.subscribe(res => {
      this.response = res
      this.para_array = Object.keys(res)
      console.log(this.response)// this.form_id
      if (this.response["Physical Location "]){
        this.physical_location_question_id = this.response["Physical Location "][0].id 
      }
      console.log("physical id is ", this.physical_location_question_id)
      // localStorage.setItem(this.physical_location_question_id, JSON.stringify([]))

      // if (storedData) storedData.filter(el=> this.addComponent(el.data_id, el.src) )
        
      })

    this.ProjectService.get_admin_ui()
    this.form_id = localStorage.getItem('form_id')
    // let physical_location_question_id = localStorage.getItem('question_id')
    if (this.form_id){
      this.local_form_id = true
      this.ProjectService.vendorDetails({form_id:"form_id_01"})//"this.form_id"
    } else {
      this.local_form_id = false
    }
  }

  storeVendorDetail(data){
    console.log("physical ", this.response_subquestions)
    // console.log("Data is ", data["Physical Location "][0].question_id)
    this.storePhysicalLocation(data["Physical Location "])
    this.storeBasicInfo(data["Basic Information"])

  }

  storePhysicalLocation(physicalLocationData){
    for ( let data in physicalLocationData){
      let pLData =  physicalLocationData[data]
      localStorage.setItem(pLData.question_id, JSON.stringify(pLData.data))
    }
  }

  storeBasicInfo(basicInfoData){
    console.log(basicInfoData)
    for ( let data in basicInfoData){
      let bIData =  basicInfoData[data]
      localStorage.setItem(bIData.question_id, JSON.stringify(bIData.data))
    }
  }
  addComponent(id, src){
    console.log(src)
    //check and resolve the component
    var comp = this._cfr.resolveComponentFactory(ImagesComponent);
    //Create component inside container
    var expComponent:ComponentRef<ImagesComponent> = this.container.createComponent(comp);
    //see explanations
    expComponent.instance.question_id = id;
    expComponent.instance.src = src;

    expComponent.instance._ref = expComponent;
  }
  
  preFilledData(){
    let storedData : any = JSON.parse(localStorage.getItem(this.physical_location_question_id))
    // if (storedData) storedData.filter(el=> this.addComponent(el.data_id, el.src) )
    // this.presentData = storedData
    if (storedData) storedData.filter(el=> this.addComponent(el.data_id, el.src) )

  }


  checkAndUpdate(i){
    // let storedData : any = JSON.parse(localStorage.getItem(this.physical_location_question_id))
    // if (storedData) storedData.filter(el=> this.addComponent(el.data_id, el.src) )

    this.images = ''
    for ( let j = 0; j < this.para_array.length; j++ ) {
      if (i == this.form_response_array[j] ){
        this.response_subquestions = this.form_response[j]
        // console.log("this.response_subquestions is ", this.response_subquestions)
      }
      if ( i == this.para_array[j] ) {
        if ( j+1 == this.para_array.length ) this.showFreeze = false
        else this.showFreeze = true
        // this.param_id = set it to a value
        this.showSubQuestions = true
        this.subquestions = this.response[i]
        
        this.param_name = i
        // console.log(this.subquestions)
        setTimeout(()=>{
           this.preFilledData()
        }, 1000);        
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
    var temp = {
      form_id: this.form_id,
      question_id: id,
      file_data: $event.target.value,
      is_submit : false,
      data_id: data_id
    }
    this.ProjectService.postFormDetails(temp)
  }

}

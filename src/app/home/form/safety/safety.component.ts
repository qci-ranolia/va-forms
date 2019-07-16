import { Component, OnInit, ComponentRef, ElementRef, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { MatRadioChange } from '@angular/material';
import { APIService } from '../../../service/APIService';
import { ProjectService } from '../../../service/ProjectService';
import { HttpEvent } from '@angular/common/http';
import { ImagesComponent } from '../images/images.component'

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.scss']
})

export class SafetyComponent implements OnInit/* , AfterViewInit */  {
  conditions : string[] = ["Yes", "No"];
  firstCond: any
  secondCond:any

  isDisabled: boolean = false

  safetyQuestionId:any = "ecaa9527b69d881f6a6aa0c4e3659b15"
  extnQuestionId:any = "3fa8e450cbb4de5a877d15948f4470b1"
  
  form_id:any

  show:any
  acSafe:any
  acExtn:any

  safetyDataIdKey:any
  safetyDataId:any
  extnDataIdKey:any
  extnDataId:any
  firstCondDataId:any
  

  offline:boolean = false
  @ViewChild('parentSafe', { read: ViewContainerRef }) containerSafe: ViewContainerRef;
  @ViewChild('parentExtn', { read: ViewContainerRef }) containerExtn: ViewContainerRef;
  @ViewChild("safety") elSafety: ElementRef;
  @ViewChild("extension") elExtension: ElementRef;

  constructor( private ProjectService: ProjectService, private APIService: APIService, private _cfr: ComponentFactoryResolver ) { }
  
  ngOnInit() {
    this.show = localStorage.getItem("form_status")
    this.form_id = localStorage.getItem('form_id')
    // console.log(this.form_id)
    
    // let firstCondData = this.storedSafetyQuestionId(this.safetyQuestionId)
      
    this.storedSafetyQuestionId()
    this.storedExtnQuestionId()

    // this.firstCond = firstCondData.src 
    this.safetyDataIdKey = this.safetyQuestionId+'data_id'
    this.safetyDataId = this.getDataId(this.safetyDataIdKey)
    // this.firstCondDataId = firstCondData.data_id

    this.extnDataIdKey = this.extnQuestionId+'data_id'
    this.extnDataId = this.getDataId(this.extnDataIdKey)

    this.APIService.questionIdLocalStorage(this.safetyQuestionId)
  }

  getDataId(dataIdKey){
    return localStorage.getItem(dataIdKey)
  }
  
  storedSafetyQuestionId():any{
    this.APIService.questionIdLocalStorage(this.safetyQuestionId).then((el:any)=>{
      let storedData = JSON.parse(el)
      console.log(storedData)
      if (storedData.length != 0){
        this.firstCond = 'true'
        this.acSafe = true
        console.log("storedData is for ", storedData)
        this.preFilledDataSafe(storedData)
        return //storedData
      } 
      this.firstCond = 'false'
      this.acSafe = false
      // return [{"src":null,"data_id":null }]
    })
    // this.firstCondDataId = firstCondData.data_id
    // let storedData : any = JSON.parse(localStorage.getItem(questionId))
  }
  
  storedExtnQuestionId():any{
    this.APIService.questionIdLocalStorage(this.extnQuestionId).then((el:any)=>{
      let storedData = JSON.parse(el)
      console.log(storedData)
      if (storedData.length != 0){
        this.secondCond = 'true'
        this.acExtn = true
        console.log("storedData is for ", storedData)
        this.preFilledDataExtn(storedData)
        return // storedData
      }
      this.secondCond = 'false'
      this.acExtn = false 
      // return [{"src":null,"data_id":null }]
    })
    // this.secondCond = secondCondData.src
    // this.secondCondDataId = secondCondData.data_id
    // let storedData : any = JSON.parse(localStorage.getItem(questionId))
  }

  clickSafety(event:MatRadioChange ) {
    let event_value:any
    if (event.value === 'true') {
      this.elSafety.nativeElement.style.display = "block"
      this.acSafe = true
      event_value = true
    } else {
      this.elSafety.nativeElement.style.display = "none"
      this.acSafe = false
      event_value = false
      console.log(this.safetyQuestionId)
    }
    var temp = {
      form_id: this.form_id,
      question_id: this.safetyQuestionId,
      file_data:event_value,
      is_submit:false,
      data_id: this.safetyDataId
    }
    this.safetyDataId = this.postRequest(temp)
    console.log("safetyDataId ", this.safetyDataId)
    // this.postRequest(temp)
  }


  clickExtn(event:MatRadioChange ) {
    let event_value:any
    if (event.value === 'true') {
      this.elExtension.nativeElement.style.display = "block"
      this.acExtn = true
      event_value = true
    } else {
      this.elExtension.nativeElement.style.display = "none"
      this.acExtn = false
      event_value = false
    }
    var temp = {
      form_id: this.form_id,
      question_id: this.extnQuestionId,
      file_data: event_value,
      is_submit: false,
      data_id: this.extnDataId
    }
    this.extnDataId = this.postRequest(temp)
    console.log("extnDataId ", this.extnDataId)
    // this.postRequest(temp)
  }

  postRequest(temp){
    console.log("request data", temp)
    if(navigator.onLine){
      this.offline = false
      console.log("You are Online")
      this.APIService.postFormDetails(temp).subscribe((event: HttpEvent<any>) =>{
        let response = this.ProjectService.HttpEventResponse(event)
        if(response) {
          console.log(response)
          // localStorage.setItem(temp.question_id, JSON.stringify({"src": temp.file_data, "data_id" : response.data_id}))
          return response.data_id
        }
      }, (err) => {
        console.log("err is ", err)
      })
    }
    else {
      this.offline = true
      this.ProjectService.openErrMsgBar("You are offline", "Please go online!", 4000)
      console.error("You are Offline")
    }
  }


  addCompoSafe(questionId, dataId, src){
    // Check and resolve the component
    var comp = this._cfr.resolveComponentFactory(ImagesComponent);
    console.log(comp)
    // Create component inside container
    var expComponent:ComponentRef<ImagesComponent> = this.containerSafe.createComponent(comp);
    // See explanations
    expComponent.instance.question_id = questionId
    expComponent.instance.data_id = dataId
    expComponent.instance.src = src;

    expComponent.instance._ref = expComponent;
  }

  addCompoExtn(questionId, dataId, src){
    // Check and resolve the component
    var comp = this._cfr.resolveComponentFactory(ImagesComponent);
    console.log(comp)
    // Create component inside container
    var expComponent:ComponentRef<ImagesComponent> = this.containerExtn.createComponent(comp);
    // See explanations
    expComponent.instance.question_id = questionId
    expComponent.instance.data_id = dataId
    expComponent.instance.src = src;

    expComponent.instance._ref = expComponent;
  }

  preFilledDataSafe(storedData){
    // let storedData : any = JSON.parse(localStorage.getItem(this.safetyQuestionId))
    console.log("storedata is ", storedData)
    // if (storedData) storedData.filter(el=> this.addComponent(el.data_id, el.src) )
    // this.presentData = storedData
    if (storedData) storedData.filter(el=> this.addCompoSafe(this.safetyQuestionId, el.data_id, el.src))
  }

  preFilledDataExtn(storedData){
    // let storedData : any = JSON.parse(localStorage.getItem(this.extnQuestionId))
    console.log("storedata is ", storedData)
    // if (storedData) storedData.filter(el=> this.addComponent(el.data_id, el.src) )
    // this.presentData = storedData
    if (storedData) storedData.filter(el=> this.addCompoExtn(this.extnQuestionId, el.data_id, el.src))
  }
  
}
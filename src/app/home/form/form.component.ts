import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ProjectService } from '../../service/ProjectService';
import { Router, ActivatedRoute } from '@angular/router';

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

  form_response : any
  form_response_array : any
  response_subquestions : any
  route_names : any =       {
                      '/form/additionaldocuments': "additional_documents",
                      '/form/additionalimages': 'additional_images',
                      '/form/basicinformation': "basic_information",
                      '/form/physicallocation': 'physical_location',
                      '/form/processcapability': "process_capability",
                      '/form/productioncapacity': 'production_capacity',
                      '/form/researchanddevelopment': 'research_and_development', 
                      '/form/safety': 'safety',
                      '/form/suppliers': 'suppliers',
                      '/form/transportation': 'transportation'
                    }

 // @ViewChild('parent', { read: ViewContainerRef }) container: ViewContainerRef; 
  Select_parameter = "Select parameter"
  urlParaName:any

  request : any
  vendorRequest : any
  parameterRequest : any
  db : any

  vendorStore : any
  parameterStore : any
  
  cursor : any
  offlineFormData : any = new Array()
  transaction : any

  routeData:any=[]

  // is the function is affected with debounce condition ?
  // bounce : number = 0;
  // debounceDelay : number = 10;
  
  constructor( private ProjectService: ProjectService, private router: Router ){
    // Experimental feature below will be removed and may be released in future release depending on business/developer's need
    // var x = this.router.url.split('/')[2]
    // this.Select_parameter = x

    this.ProjectService.emitVendorDetails.subscribe(el=>{
      this.form_response = el
      this.form_response_array = Object.keys(el)
      this.storeFormStatus(el.form_status)
      this.storeVendorDetail(el.data)
    })

    // Experimental feature to set tab name
    // Experimental feature below will be removed and may be released in future release depending on business/developer's need
    //   this.router.events.subscribe(value => {
    //     console.log('current route: ', this.router.url.toString());
    //     let route_name : string = this.router.url.toString()
    //     console.log("This is the route name", this.route_names[route_name])
    //     this.parameter = this.route_names[route_name]
    // })
  }

  ngOnInit(){
    this.ProjectService.emitQuestions.subscribe(res => {
      this.response = Object.values(res)
      this.para_array = Object.keys(res)
      // Warning remove this, when backend will give you actual question ids
      // this.para_array.push("MoreImg")
      // this.para_array.push("MoreDoc")
      
      // this was aded to make space for submit component
      // Where actual form submission happens
      this.para_array.push("Submit")
      
      // console.log("getforms is  ", this.response) // this.form_id
      // if (this.response["physical_location"]){
      //   this.physical_location_question_id = this.response["physical_location"][0].id 
      // }
      // console.log("physical id is ", this.physical_location_question_id)
    })

    this.ProjectService.get_admin_ui()
    this.form_id = localStorage.getItem('form_id')
    // console.log("This is the form id", this.form_id)
    // let physical_location_question_id = localStorage.getItem('question_id')
    
    if ( this.form_id ){
      this.local_form_id = true
      this.ProjectService.vendorDetails({form_id:this.form_id})
    } else {
      this.ProjectService.openErrMsgBar("Please start video chat first.", "Forms will not work properly", 4800)
      this.local_form_id = false
    }
  }

  // Meant to check status of the form, if its  false, Edits can be made else all will be disabled
  storeFormStatus(form_status){
    // console.log("Form status for this form is is ", form_status)
    localStorage.setItem("form_status", form_status)
  }

  storeVendorDetail(data){
    // is the function is affected with debounce condition ?
    // if (this.bounce >= (Date.now() - this.debounceDelay))
    //   return;
    // this.bounce = Date.now();
    
    // console.log("Data is ", data["Physical Location "][0].question_id)
    let subSectionKeys : any = Object.keys(data)
    let subSectionValues : any = Object.values(data)
    let all_question_ids = [] // It will hold question_ids of all questions
    if(navigator.onLine){
      if(window.indexedDB){
        this.request = window.indexedDB.open("offlineForms", 2)
        this.request.onerror = ( event : any ) => {
          console.error("some error")
          // this.ProjectService.openErrMsgBar("We could not save your data.", "OFFLINE!", 8000)
        }
        this.request.onsuccess = (event:any)=>{
          this.db = this.request.result
          for ( let i = 0; i < subSectionKeys.length; i++ ){
            let name = subSectionKeys[i]
            // console.log("vendor keyData[name] is ", data[name])
            let x = []
            for ( let datas in data[name]){
              let pLData:any =  data[name][datas]
              // Add key "text_data" corresponding to the question id's stored locally 
              for (let k in pLData.data){
                pLData.data[k]["text_data"] = pLData.text_data
                // console.log("%c src from vendor is ","color:#800", pLData.data[k].src)
                // var temp = pLData.data[k].src
                // var spaceRegEx = temp.replace(/ /g, "%20")
                let XHR = new XMLHttpRequest()
                XHR.open('GET', pLData.data[k].src, true)
                XHR.send(null)
                XHR.onreadystatechange = function () {
                  if (XHR.readyState === 4 && XHR.status === 200) {
                    var type = XHR.getResponseHeader('Content-Type')
                    if (type.indexOf("text") !== 1) {
                      // console.log("%c src after reading from vendor is ","color:#080", XHR.responseText)
                      // return request.responseText
                    }
                  }
                }
              }
              // key "text_data" ends
              x.push(pLData.question_id)
              // console.log("someData is ", pLData.question_id, pLData.data)
              // storing data for each question id in localstorage
              // pLData.src = "sasasas"
              this.vendorRequest = this.db.transaction(["vendorStore"], "readwrite")
              .objectStore("vendorStore")
              .put(pLData)
              this.vendorRequest.onerror = (event:any)=>{
                console.error("not saved")
                this.ProjectService.openErrMsgBar("Pre-filled forms will not work in offline mode", "Internet is working.", 5000)
              }
              this.vendorRequest.onsuccess = (event:any)=>{
                console.warn("saved successfully")                
                // this.ProjectService.openErrMsgBar("We successfully saved your data. Data will be synced once you will be online.", "OFFLINE!", 7000)
              }
              let parameterNames : any =  {
                "parameter_name":subSectionKeys[i],
                "data":Object.values(this.response[i])
              }
              this.parameterRequest = this.db.transaction(["parameterStore"], "readwrite")
              .objectStore("parameterStore")
              .put(parameterNames)
              this.parameterRequest.onerror = (event:any)=>{
                this.ProjectService.openErrMsgBar("Forms will not work in offline mode.", "Internet is working.", 5000)
              }
              this.parameterRequest.onsuccess = (event:any)=>{
                console.warn("saved successfully")                
                // this.ProjectService.openErrMsgBar("We successfully saved your data. Data will be synced once you will be online.", "OFFLINE!", 7000)
              }
              localStorage.setItem(pLData.question_id, JSON.stringify(pLData.data))
              all_question_ids.push(pLData.question_id)
              
            }
            // localStorage.setItem(pLData.question_id, JSON.stringify(pLData.data))
            localStorage.setItem(name, JSON.stringify(x))
            // console.log(name, x)
          }
        }
        this.request.onupgradeneeded = (event:any)=>{
          this.db = event.target.result
          this.vendorStore = this.db.createObjectStore("vendorStore", { keyPath : "question_id" })
          this.parameterStore = this.db.createObjectStore("parameterStore", { keyPath : "parameter_name" })
          // console.log(this.parameterStore)
          const objectData:any = [] 
          // console.log(this.vendorStore)
          // for ( var i in objectData ) {
          //   console.log(objectData[i])
          //   this.vendorStore.put(objectData[i], pLData.question_id)
          // }
          console.log("this.vendorStore is ", this.vendorStore)
        }
      }// else, if no DB found
    }// else,if not online
    // console.log("All question ids", all_question_ids)
    
    // this.storePhysicalLocation(data["physical_location"])
    // this.storeBasicInfo(data["basic_information"])
    this.storeQuestionIds(all_question_ids)
  }

  storeQuestionIds(question_ids){
    // The purpose is to store all question ids in the localstorage, 
    // So when the user is about to submit the all details, 
    // We will check if data for every question id is not null 
    localStorage.setItem("questionIds", JSON.stringify(question_ids))
  }

  // Function use commented, See NO usage
  storePhysicalLocation(physicalLocationData){
    for ( let data in physicalLocationData){
      let pLData =  physicalLocationData[data]
      localStorage.setItem(pLData.question_id, JSON.stringify(pLData.data))
    }
  }

  // Function use commented, See NO usage
  storeBasicInfo(basicInfoData){
    for ( let data in basicInfoData){
      let bIData =  basicInfoData[data]
      localStorage.setItem(bIData.question_id, JSON.stringify(bIData.data))
    }
  }
  
  checkAndUpdate(i){
    for ( let j = 0; j < this.para_array.length; j++ ) {
      if ( i == this.para_array[j] ) {
        let routeName = i.replace(/_/g, "")
        this.router.navigate(['/form/'+routeName])
        // Experimental feature to set tab name
        // Experimental feature below will be removed and may be released in future release depending on business/developer's need
        let newRoutes:any = {
          route: i,
          synced: null
        }
        this.routeData.push(newRoutes)
        localStorage.setItem("routeSyncedInfo", JSON.stringify(this.routeData))
        return
      } else {
        // this.ProjectService.openErrMsgBar("Please select a ","PARAMETER")
      }
    }
  }

}
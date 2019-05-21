import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ProjectService } from '../../service/ProjectService';
import { Router } from '@angular/router';

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
                      '/form/transportation': 'transportation'}

 // @ViewChild('parent', { read: ViewContainerRef }) container: ViewContainerRef; 
  
  constructor( private _cfr: ComponentFactoryResolver, private ProjectService: ProjectService, private router: Router ){
    
    this.ProjectService.emitVendorDetails.subscribe(el=>{
      this.form_response = el
      this.form_response_array = Object.keys(el)
      this.storeFormStatatus(el.form_status)
      this.storeVendorDetail(el.data)
    })

    //Experimental feature to set tab name
    //   this.router.events.subscribe(value => {
  //     console.log('current route: ', this.router.url.toString());
  //     let route_name : string = this.router.url.toString() 
  //     console.log("This is the route name", this.route_names[route_name])
  //     this.parameter = this.route_names[route_name]
  // });


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
      //Warning remove this , when backend will give you actual question ids
      //this.para_array.push("MoreImg")
      //this.para_array.push("MoreDoc")
      
      // this was aded to make space for submit component
      // Where actual form submission happens
      this.para_array.push("Submit")
      
      console.log("getforms is  ", this.response)// this.form_id
      if (this.response["physical_location"]){
        this.physical_location_question_id = this.response["physical_location"][0].id 
      }
      console.log("physical id is ", this.physical_location_question_id)
    })

    this.ProjectService.get_admin_ui()
    this.form_id = localStorage.getItem('form_id')
    console.log("This is the form id", this.form_id)
    // let physical_location_question_id = localStorage.getItem('question_id')
    
    if (this.form_id){
      this.local_form_id = true
      this.ProjectService.vendorDetails({form_id:this.form_id})//"this.form_id"
    } else {
      console.error("%c Form id couldnt be found","color: #f44'")
      this.local_form_id = false
    }
  }

  //Meant to check status of the form, if its  false, Edits can be made else all will be disabled
  storeFormStatatus(form_status){
    console.log("Form status for this form is is ", form_status)
    localStorage.setItem("form_status", form_status)
  }

  storeVendorDetail(data){
    console.log("data is ", data)
    // console.log("Data is ", data["Physical Location "][0].question_id)
    let subSectionKeys :any = Object.keys(data)
    let subSectionData :any
    let all_question_ids = [] //it will hold question_ids of all questions


    for (let i = 0; i < subSectionKeys.length; i++){
      let name = subSectionKeys[i]
      // console.log("sasasa", data[name])
      let x=[]
      for ( let datas in data[name]){
        let pLData:any =  data[name][datas]
        x.push(pLData.question_id)
        console.log(pLData.question_id, pLData.data )
        // stroring data for each question id in localstorage
        localStorage.setItem(pLData.question_id, JSON.stringify(pLData.data))
        all_question_ids.push(pLData.question_id)
      }
      // localStorage.setItem(pLData.question_id, JSON.stringify(pLData.data))
      localStorage.setItem(name, JSON.stringify(x))
      //console.log(name, x)
      
    }
    
    console.log("All question ids", all_question_ids)
     
    this.storePhysicalLocation(data["physical_location"])
    this.storeBasicInfo(data["basic_information"])
    this.storeQuestionIds(all_question_ids)
  }

  storeQuestionIds(question_ids){
    //THe purpose is to store all question ids in the localstorage, 
    // so when the user is about to submit the all details, 
    //we will check if data for every question id is not null 
      localStorage.setItem("questionIds", JSON.stringify(question_ids))
  }


  storePhysicalLocation(physicalLocationData){
    for ( let data in physicalLocationData){
      let pLData =  physicalLocationData[data]
      localStorage.setItem(pLData.question_id, JSON.stringify(pLData.data))
    }
  }

  storeBasicInfo(basicInfoData){
    // console.log(basicInfoData)
    for ( let data in basicInfoData){
      let bIData =  basicInfoData[data]
      localStorage.setItem(bIData.question_id, JSON.stringify(bIData.data))
    }
  }
  // addComponent(id, src){
  //   console.log(src)
  //   //check and resolve the component
  //   var comp = this._cfr.resolveComponentFactory(ImagesComponent);
  //   //Create component inside container
  //   var expComponent:ComponentRef<ImagesComponent> = this.container.createComponent(comp);
  //   //see explanations
  //   expComponent.instance.question_id = id;
  //   expComponent.instance.src = src;

  //   expComponent.instance._ref = expComponent;
  // }
  
  // preFilledData(){
  //   let storedData : any = JSON.parse(localStorage.getItem(this.physical_location_question_id))
  //   // if (storedData) storedData.filter(el=> this.addComponent(el.data_id, el.src) )
  //   // this.presentData = storedData
  //   if (storedData) storedData.filter(el=> this.addComponent(el.data_id, el.src) )

  // }


  checkAndUpdate(i){
    // let storedData : any = JSON.parse(localStorage.getItem(this.physical_location_question_id))
    // if (storedData) storedData.filter(el=> this.addComponent(el.data_id, el.src) )
    this.images = ''
    for ( let j = 0; j < this.para_array.length; j++ ) {
      // if (i == this.form_response_array[j] ){
      //   this.response_subquestions = this.form_response[j]
      //   console.log("this.response_subquestions is ", this.response_subquestions)
      // }
      if ( i == this.para_array[j] ) {
        let routeName = i.replace(/_/g, "")
        this.router.navigate(['/form/'+routeName])

        if ( j+1 == this.para_array.length ) this.showFreeze = false
        else this.showFreeze = true
        // this.router.navigate(['/form/transp']);
        
        // this.param_id = set it to a value
        this.showSubQuestions = true
        this.subquestions = this.response[i]
        
        this.param_name = i
        // console.log(this.subquestions)
        setTimeout(()=>{
          //  this.preFilledData()
        }, 1000);        
        return this.subquestions
      } else {
        this.param_name = null
        this.showSubQuestions = false
      }
    }
  }

  // submitResponse(){
  //   var temp = {
  //     assessor_id:'assessor_id_01',
  //     assessor_name:'assessor_name_01',
  //     vendor_id:'vendor_id_01',
  //     vendor_name:'vendor_name_01',
  //     form_id:this.form_id,
  //     is_submit:true
  //   }
  //   this.ProjectService.submitResponse(temp)
  // }

  // saveRadioWithSubQues( id, event:MatRadioChange ) {
  //   let data_id : any = localStorage.getItem(id)
  //   console.log(data_id)
  //   var temp = {
  //     form_id: this.form_id,
  //     question_id: id,
  //     file_data: event.value,
  //     is_submit:false,
  //     data_id:data_id
  //   }
  //   this.ProjectService.postFormDetails(temp)
  //   return this.subquestions
  //   // this.sync = true
  // }

  // textDetails(id, $event){
  //   let data_id : any = localStorage.getItem(id)  
  //   var temp = {
  //     form_id: this.form_id,
  //     question_id: id,
  //     file_data: $event.target.value,
  //     is_submit : false,
  //     data_id: data_id
  //   }
  //   this.ProjectService.postFormDetails(temp)
  // }

}

import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/ProjectService';
import { APIService } from '../../service/APIService';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  keyAspects:any
  form_id:any
  keyAspectsQuesID:any="aebffe1bc78f7a0914779688e9868040"
  show: any  
  componentName:any ="Suppliers"

  constructor(private ProjectService: ProjectService, private APIService: APIService) {
    // this.questionIds = this.valueStored()
    // this.APIService.JSON_IU().subscribe(el=>{
    //   console.log(el)
    // })
    // this.officialDesignationQuesID = this.storedQuestionId(this.officialDesignationQuesID)
    this.form_id = localStorage.getItem("form_id")
    // console.log("sahgshasg ", this.storedQuestionId(this.officialDesignationQuesID)[0].src)
    
  }

  ngOnInit() {
    this.show = localStorage.getItem("form_status")

    this.keyAspects = this.storedQuestionId(this.keyAspectsQuesID)[0]
    
  }

  valueStored(){
    let storedData : any = JSON.parse(localStorage.getItem(this.componentName))
    return storedData
  }

  storedQuestionId(questionId){
    let storedData : any = JSON.parse(localStorage.getItem(questionId))

    if (storedData.length != 0){
      console.log("storedData is ", storedData)
      return storedData
    } 
    return [{"src":null,"data_id":null }]
  }

  clickKeyAspects(e){
    var temp = {
      form_id: this.form_id,
      question_id: this.keyAspectsQuesID,
      file_data: e.target.value,
      is_submit : false,
      data_id:  this.keyAspects.data_id
    }
    this.postRequest(temp)       
  }

  postRequest(temp){
    this.APIService.postFormDetails(temp).subscribe((event: HttpEvent<any>) =>{
      let response = this.ProjectService.HttpEventResponse(event)
      if(response){
        localStorage.setItem(temp.question_id, JSON.stringify({"src": temp.file_data, "data_id" :response.data_id}))
        console.log(response)
      } else {
        // console.log(response)
      }
    }, (err) => {
      console.log("err is ", err)
    })
  }

}

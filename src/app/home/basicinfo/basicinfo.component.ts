import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/ProjectService';
import { APIService } from '../../service/APIService';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.scss']
})
export class BasicinfoComponent implements OnInit {
  officialDesignation:any
  officialName:any
  form_id:any
  officialDesignationQuesID:any="4f7414dcea7d5e61ee08e4ddf238a04f"
  officialNameQuesID:any="4367252b9f222177ac5134c1b84d6341"
  
  
  questionIds:any= new Array()
  componentName:any ="Basic Information"
  
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
    this.officialDesignation = this.storedQuestionId(this.officialDesignationQuesID)[0]
    this.officialName = this.storedQuestionId(this.officialNameQuesID)[0]

    console.log(this.officialDesignation)
    console.log(this.officialName)
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

  clickOfficialName(e){
    var temp = {
      form_id: this.form_id,
      question_id: this.officialNameQuesID,
      file_data: e.target.value,
      is_submit : false,
      data_id:  this.officialName.data_id
    }
    this.postRequest(temp)       
  }
  clickOfficialDesignation(e){
    var temp = {
      form_id: this.form_id,
      question_id: this.officialDesignationQuesID,
      file_data: e.target.value,
      is_submit : false,
      data_id:  this.officialDesignation.data_id
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

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
  conditions : string[] = ['Yes', 'No'];
  parameters : any;
  
  showSubQuestions : boolean = false
  subquestions : any;
  
  para_array : any
  param_name : any
  param_ques_index : any
  response:any
  
  constructor( private ProjectService: ProjectService ){
    this.ProjectService.emitQuestions.subscribe(res => {
      // this.response = Object.keys(res)
      // this.para_array = Object.keys(res)
      console.log(res)
    })
  }

  ngOnInit(){
    this.ProjectService.get_admin_ui()
  }

  checkAndUpdate(i){
    // for ( let i = 0; i < this.response.length; i++ ){
    //   console.log(i)
    // }
    if (i == "physical_location"){
      this.showSubQuestions = true
      this.subquestions = [
        {
          id:"ahjdashj",
          question:"Geotagged Assessment",
          radio:"Yes",
          evidence:"Provide evidence by uploading 4 photos",
          criteria:"Failed/passed depends upon geotags"
        }
      ]
    } else if (i == "production_capability"){
      this.showSubQuestions = true
      this.subquestions = [
        {
          id:"ahjdsdashj",
          question:"Which machines are critical for your production?",
          radio:"No",
          evidence:[
            {
              equipment:"machine/equipment",
              picture:"image src"
            },
            {
              equipment:"machine/equipment",
              picture:"image src"
            },
            {
              equipment:"machine/equipment",
              picture:"image src"
            }
          ]
        },
        {
          id:"ahjdashjsad",
          question:"If these machines are automated",
          radio:"Yes",
          evidence:"If true show next question"
        },
        {
          id:"ahjdashfhj",
          question:"What is the capability of your daily unit manufacturing and for monthly?",
          radio:"No",
          evidence:"show condition if true"
        }
      ]
    } else if (i == "quality"){
      this.showSubQuestions = true
      this.subquestions = [
        {
          id:"ahjdassasahj",
          question:"Do you have quality control mechanism for product?",
          radio:"Yes",
          evidence:"show condition if true"
        },
        {
          id:"ahjdasahaj",
          question:"Have you made SOP for quality plan?",
          radio:"Yes",
          evidence:"show condition if true"
        },
        {
          id:"ahjdashjaa",
          question:"What is the rejection percentage of the final product?",
          radio:"No",
          evidence:"show condition if true"
        },
        {
          id:"fdahjdashj",
          question:"Do you provide warranty/guarantee or recalling to your product?",
          radio:"Yes",
          evidence:"show condition if true"
        }
      ]
    } else if (i == "transportation"){
      this.showSubQuestions = true
      this.subquestions = [
        {
          id:"fddfahjdashj",
          question:"What are the various practices/tools for transport and storage techniques?",
          radio:"No",
          evidence:"show condition if true"
        },
        {
          id:"bmbahjdashj",
          question:"Have you documented at various stages?",
          radio:"Yes",
          evidence:"show condition if true"
        },
        {
          id:"zxczahjdashj",
          question:"Is the state of art Pan India or regional?",
          radio:"Yes",
          evidence:"show condition if true"
        }
      ]
    } else if (i == "suppliers"){
      this.showSubQuestions = true
      this.subquestions = [
        {
          id:"trahjdashj",
          question:"What key aspects do you focus on while selecting suppliers?",
          radio:"No",
          evidence:"show condition if true"
        },
        {
          id:"jhgahjdashj",
          question:"Do you monitor their performance, If yes, How?",
          radio:"Yes",
          evidence:"show condition if true"
        }
      ]
    } else {
      this.showSubQuestions = false
      // Show snackbar and hide after some proper delay
    }
    this.param_name = i
  }

  saveRadioWithSubQues( id, event:MatRadioChange ){
    // this.param_ques_index = id
    var temp = {
      id: id,
      parameter_name: this.param_name,
      value: event.value
    }
    if ( event.value == 'Yes' ){
      this.ProjectService.postRadio(temp)
      // Save Somewhere
      // console.log(this.subquestions)
      return this.subquestions
    }
  }

}
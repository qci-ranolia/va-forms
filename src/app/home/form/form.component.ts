import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  forms : any;


  constructor(){
    this.forms = [
      {
        project_name:"Machine survey form",
        questions:4
      },
      {
        project_name:"Open Defication",
        questions:10
      },
      {
        project_name:"google toilet locator",
        questions:6
      },
      {
        project_name:"Swach bharat mission",
        questions:2
      }
    ]
  }

  ngOnInit(){ }
  
  formQuestions(i){

  }

}

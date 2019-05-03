import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {
  responses:any
  showDetails:boolean = true;
  hideme=[]
  constructor() {
    this.responses = [
      {
        project_name:"Machine survey form",
        project_submitted_by:"submitted",
        project_submition_date:"10/12/2018",
        project_info:{
          info1:"info1",
          info2:"info",
          info3:"info",
          info4:"info"
        }
      },
      {
        project_name:"Open Defication",
        project_submitted_by:"submitted",
        project_submition_date:"10/12/2018",
        project_info:{
          info1:"info2",
          info2:"info",
          info3:"info",
          info4:"info"
        }
      },
      {
        project_name:"google toilet locator",
        project_submitted_by:"submitted",
        project_submition_date:"10/12/2018",
        project_info:{
          info1:"info3",
          info2:"info",
          info3:"info",
          info4:"info"
        }
      },
      {
        project_name:"Swach bharat mission",
        project_submitted_by:"submitted",
        project_submition_date:"10/12/2018",
        project_info:{
          info1:"info4",
          info2:"info",
          info3:"info",
          info4:"info"
        }
      }
    ]
  }

  ngOnInit() {
  }
  
}

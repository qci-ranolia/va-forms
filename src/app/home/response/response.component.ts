import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../service/ProjectService";

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {
  responses:any
  showDetails:boolean = true;
  hideme = []
  
  constructor(private projectService: ProjectService) {
    this.projectService.emitResponses.subscribe( res => {
      this.responses = res
    })
  
  }

  ngOnInit(){
    this.projectService.response()
  }

}

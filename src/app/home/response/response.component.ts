import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../service/ProjectService";

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {


  constructor(private projectService: ProjectService) {}

  ngOnInit(){}

}

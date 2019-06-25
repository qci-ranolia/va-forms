import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectService } from "../../../service/ProjectService";

import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-gemliveview',
  templateUrl: './gemliveview.component.html',
  styleUrls: ['./gemliveview.component.scss']
})
export class GemliveviewComponent implements OnInit {

  @Input() form_id:any;
  tableHeader: any = []
  tableSubHeaders: any = []
  tableResponse: any = []
  displayLiveAssesment = false;
  data = {};
  checkForNewData : any;

  constructor(private projectService: ProjectService) {
    this.projectService.emitLiveResponse.subscribe(res => {
      console.log(res)

      if (res.response.tableHeader) {

        if(this.tableHeader === res.response.tableHeader){
        } else {
          this.tableHeader = res.response.tableHeader
          // console.log(this.tableHeader)
        }

        if(this.tableSubHeaders === res.response.tableSubHeader){
        } else {
          this.tableSubHeaders = res.response.tableSubHeader
          // console.log(this.tableSubHeaders)
        }

        if(this.tableResponse === res.response.totalResponse){
        } else {
          this.tableResponse = res.response.totalResponse
        }

        this.displayLiveAssesment = true
      }

    })
  }

  ngOnInit() {
    this.data = {
      form_id: this.form_id
    }
    this.projectService.getLiveAssesment(this.data)

    this.checkForNewData = setInterval(()=>{
      this.projectService.getLiveAssesment(this.data)
    }, 10000)
  }

  checkCondition(feedback, data) {

    if(!feedback)
      return false

    if(data.length===0)
      return false

      return true
  }

  ngOnDestroy() {
    clearInterval(this.checkForNewData)
  }
}

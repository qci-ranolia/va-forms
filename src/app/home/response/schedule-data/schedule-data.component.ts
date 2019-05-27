import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../../service/ProjectService";

@Component({
  selector: 'app-schedule-data',
  templateUrl: './schedule-data.component.html',
  styleUrls: ['./schedule-data.component.scss']
})
export class ScheduleDataComponent implements OnInit {

  scheduledData = [
    {
      time:"10:30AM",
      date:"14/05/2019",
      status:"online"
    },
    {
      time:"11:30AM",
      date:"14/05/2019",
      status:"offline"
    },
    {
      time:"1:00PM",
      date:"14/05/2019",
      status:"offline"
    }
  ]

  constructor(private projectService: ProjectService) {

    this.projectService.emitSessionScheduleData.subscribe(res=>{

    })

  }

  ngOnInit() {
    this.projectService.getSessionScheduleData()
  }

}

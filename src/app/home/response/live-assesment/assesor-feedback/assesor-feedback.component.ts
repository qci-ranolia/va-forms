import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../service/ProjectService';
import { MatBottomSheet } from "@angular/material";

@Component({
  selector: 'app-assesor-feedback',
  templateUrl: './assesor-feedback.component.html',
  styleUrls: ['./assesor-feedback.component.scss']
})
export class AssesorFeedbackComponent implements OnInit {

  feedback = "";
  parameter = "";
  parameters : string[] = [
    'The firm is an OEM',
    'The firm is not an OEM',
    'The assessment was inconclusive and therefore an on-site verification is recommended'
  ];

  constructor(private projectService: ProjectService, private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  selectedParameter(parameter) {
    // console.log(parameter)
    this.parameter = parameter
  }

  acceptFeedback() {
    let form_id = ""

    if(localStorage.getItem("form_id"))
    form_id = ""+localStorage.getItem("form_id")

    let data = {
      feedback: this.feedback,
      parameter: this.parameter,
      form_id: form_id
    }

    console.log(data)

    this.projectService.uploadAssesorFeedback(data)
    this.bottomSheet.dismiss()
    // console.log(this.feedback);
    // console.log(this.parameter)
  }

}

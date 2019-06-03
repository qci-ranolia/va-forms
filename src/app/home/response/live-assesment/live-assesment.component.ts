import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../../service/ProjectService";
import { MatBottomSheet } from "@angular/material";
import { AssesorFeedbackComponent } from "./assesor-feedback/assesor-feedback.component";

@Component({
  selector: 'app-live-assesment',
  templateUrl: './live-assesment.component.html',
  styleUrls: ['./live-assesment.component.scss']
})
export class LiveAssesmentComponent implements OnInit {

  tableHeader: any = []
  tableSubHeaders: any = []
  tableResponse: any = []
  displayLiveAssesment = false;
  data = {};
  submitForm = false;

  //  +++++++++++++++original++++++++++++++++++++++++
  // tableHeader  = [
  //   { colspan:"1", data:"Assessor" },
  //   { colspan:"1", data:"Vendor" },
  //   { colspan:"1", data:"Physical Location" },
  //   { colspan:"2", data: "Basic Information" },
  //   { colspan:"1", data: "Process capability" },
  //   { colspan:"1", data: "Production Capacity" },
  //   { colspan:"1", data: "Suppliers" },
  //   { colspan:"1", data: "Transportation" },
  //   { colspan:"2", data: "Safety" },
  //   { colspan:"3", data: "Research & Development" },
  //   { colspan:"1", data:"Video link" }
  //
  // ]
  //  +++++++++++++++original++++++++++++++++++++++++


  //  +++++++++++++++original++++++++++++++++++++++++
  // tableSubHeaders= [
  //   {name:"Geotagged Assessor"},
  //   {name:"Geotagged Vendor"},
  //   {name:"Geotagged Assessment"},
  //   {name:"What is the name of the official taking part in the assessment"},
  //   {name:"Designation of the official in the firm"},
  //   {name:"Show the process of production of the product"},
  //   {name:"Show the machines critical for production for the product"},
  //   {name:"What key aspects are focussed while selecting suppliers"},
  //   {name:"Show the transport facility"},
  //   {name:"Are there any effective signs and labels for safety"},
  //   {name:"Are there any fire extinguisher and other safety equipment in sight"},
  //   {name:"Show the R&D facility"},
  //   {name:"Show the products/processes for which patents have been obtained"},
  //   {name:"Show prototype if any"},
  //   {name:"Video link"}
  // ]
  //  +++++++++++++++original++++++++++++++++++++++++


  //  +++++++++++++++original++++++++++++++++++++++++
  // tableResponse=[
  //   {
  //     responseData : [
  //     {
  //         data : [
  //           {type:"text", value:"Assessor_NAme"},
  //         ]
  //       },
  //     {
  //         data : [
  //           {type:"text", value:"Vendor_NAme"},
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"image", src:"assets/images/1.jpg", id:""},
  //           {type:"image", src:"assets/images/2.jpg", id:""},
  //           {type:"image", src:"assets/images/3.jpg", id:""},
  //           {type:"image", src:"assets/images/4.jpg", id:""},
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"text", value:"Some Name"},
  //           {type:"image", src:"assets/images/5.jpg"},
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"text", value:"Some Name"},
  //           {type:"image", src:"assets/images/5.jpg"},
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"image", src:"assets/images/5.jpg"},
  //           {type:"image", src:"assets/images/6.jpg"},
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"image", src:"assets/images/5.jpg"},
  //           {type:"image", src:"assets/images/6.jpg"},
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"text", value:"Some value goes here"},
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"image", src:"assets/images/7.jpg"},
  //           {type:"image", src:"assets/images/8.jpg"},
  //           {type:"image", src:"assets/images/9.jpg"},
  //           {type:"image", src:"assets/images/10.jpg"}
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"text", value:"Some Name"},
  //           {type:"image", src:"assets/images/11.jpg"},
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"text", value:"Some Name"},
  //           {type:"image", src:"assets/images/12.jpg"},
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"image", src:"assets/images/13.jpg"},
  //           {type:"image", src:"assets/images/14.jpg"},
  //           {type:"image", src:"assets/images/15.jpg"},
  //           {type:"image", src:"assets/images/16.jpg"}
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"image", src:"assets/images/17.jpg"},
  //           {type:"image", src:"assets/images/18.jpg"},
  //           {type:"image", src:"assets/images/19.jpg"},
  //           {type:"image", src:"assets/images/20.jpg"}
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"image", src:"assets/images/21.jpg"},
  //           {type:"image", src:"assets/images/8.jpg"},
  //           {type:"image", src:"assets/images/9.jpg"},
  //           {type:"image", src:"assets/images/10.jpg"}
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"Video", src:"assets/images/21.jpg"},
  //           {type:"video", src:"assets/images/8.jpg"},
  //           {type:"video", src:"assets/images/9.jpg"},
  //           {type:"video", src:"assets/images/10.jpg"}
  //         ]
  //       }
  //
  //     ]
  //   },
  //
  //   {
  //     responseData : [
  //     {
  //         data : [
  //           {type:"text", value:"Assessor_NAme"},
  //         ]
  //       },
  //     {
  //         data : [
  //           {type:"text", value:"Vendor_NAme"},
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"image", src:"assets/images/1.jpg", id:""},
  //           {type:"image", src:"assets/images/2.jpg", id:""},
  //           {type:"image", src:"assets/images/3.jpg", id:""},
  //           {type:"image", src:"assets/images/4.jpg", id:""},
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"text", value:"Some Name"},
  //           {type:"image", src:"assets/images/5.jpg"},
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"text", value:"Some Name"},
  //           {type:"image", src:"assets/images/5.jpg"},
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"image", src:"assets/images/5.jpg"},
  //           {type:"image", src:"assets/images/6.jpg"},
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"image", src:"assets/images/5.jpg"},
  //           {type:"image", src:"assets/images/6.jpg"},
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"text", value:"Some value goes here"},
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"image", src:"assets/images/7.jpg"},
  //           {type:"image", src:"assets/images/8.jpg"},
  //           {type:"image", src:"assets/images/9.jpg"},
  //           {type:"image", src:"assets/images/10.jpg"}
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"text", value:"Some Name"},
  //           {type:"image", src:"assets/images/11.jpg"},
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"text", value:"Some Name"},
  //           {type:"image", src:"assets/images/12.jpg"},
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"image", src:"assets/images/13.jpg"},
  //           {type:"image", src:"assets/images/14.jpg"},
  //           {type:"image", src:"assets/images/15.jpg"},
  //           {type:"image", src:"assets/images/16.jpg"}
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"image", src:"assets/images/17.jpg"},
  //           {type:"image", src:"assets/images/18.jpg"},
  //           {type:"image", src:"assets/images/19.jpg"},
  //           {type:"image", src:"assets/images/20.jpg"}
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"image", src:"assets/images/21.jpg"},
  //           {type:"image", src:"assets/images/8.jpg"},
  //           {type:"image", src:"assets/images/9.jpg"},
  //           {type:"image", src:"assets/images/10.jpg"}
  //         ]
  //       },
  //       {
  //         data : [
  //           {type:"Video", src:"assets/images/21.jpg"},
  //           {type:"video", src:"assets/images/8.jpg"},
  //           {type:"video", src:"assets/images/9.jpg"},
  //           {type:"video", src:"assets/images/10.jpg"}
  //         ]
  //       }
  //
  //     ]
  //   }
  //
  // ]
  //  +++++++++++++++original++++++++++++++++++++++++

  constructor(private projectService: ProjectService, private bottomSheet: MatBottomSheet) {
    this.projectService.emitLiveResponse.subscribe(res => {
      console.log(res)

      if (res.response.tableHeader) {

        this.tableHeader = res.response.tableHeader
        this.tableSubHeaders = res.response.tableSubHeader
        this.tableResponse = res.response.totalResponse

        console.log(this.tableHeader)
        console.log(this.tableSubHeaders)
        console.log(this.tableResponse)

        this.displayLiveAssesment = true

      }
      if(res.response.form_status === true) {
          this.submitForm = true
      }

    })
  }

  ngOnInit() {

    let role = localStorage.getItem("role") + ""

    if (role === "gem") {
      this.projectService.getAssesmentDataForGem()
    } else {

      if (localStorage.getItem("form_id")) {
        let form_id = localStorage.getItem("form_id");
        this.data = {
          form_id: form_id
          // form_id: "e13a679a51d746d4bc0ee7dc44f3933d"
        }

        let checkForNewData = setInterval(()=>{
          console.log("chat")
          this.projectService.getLiveAssesment(this.data)
        }, 10000)
      }

      let vendorFeed = document.getElementsByClassName(
        "OT_subscriber"
      )[0] as HTMLElement;
      if (vendorFeed) vendorFeed.style.display = "block";
    }
  }

  trimTableHeader(header) {
    return (header.substring(400, 0) + "");
  }

  refreshData() {
    this.projectService.getLiveAssesment(this.data)

    let vendorFeed = document.getElementsByClassName(
      "OT_subscriber"
    )[0] as HTMLElement;
    if (vendorFeed) vendorFeed.style.display = "block";
  }

  acceptFeedback() {
    this.bottomSheet.open(AssesorFeedbackComponent);
  }
}

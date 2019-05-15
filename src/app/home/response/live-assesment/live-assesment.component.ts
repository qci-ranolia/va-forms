import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-assesment',
  templateUrl: './live-assesment.component.html',
  styleUrls: ['./live-assesment.component.scss']
})
export class LiveAssesmentComponent implements OnInit {

  tableHeader  = [
    { colspan:"1", data:"Physical Location" },
    { colspan:"2", data: "Basic Information" },
    { colspan:"1", data: "Process capability" },
    { colspan:"1", data: "Production Capacity" },
    { colspan:"1", data: "Suppliers" },
    { colspan:"1", data: "Transportation" },
    { colspan:"2", data: "Safety" },
    { colspan:"3", data: "Research & Development" }
  ]

  tableSubHeaders= [
    {name:"Geotagged Assessment"},
    {name:"What is the name of the official taking part in the assessment"},
    {name:"Designation of the official in the firm"},
    {name:"Show the process of production of the product"},
    {name:"Show the machines critical for production for the product"},
    {name:"What key aspects are focussed while selecting suppliers"},
    {name:"Show the transport facility"},
    {name:"Are there any effective signs and labels for safety"},
    {name:"Are there any fire extinguisher and other safety equipment in sight"},
    {name:"Show the R&D facility"},
    {name:"Show the products/processes for which patents have been obtained"},
    {name:"Show prototype if any"}
  ]

  tableResponse=[
    {
      responseData : [
        {
          data : [
            {type:"image", src:"assets/images/1.jpg", id:""},
            {type:"image", src:"assets/images/2.jpg", id:""},
            {type:"image", src:"assets/images/3.jpg", id:""},
            {type:"image", src:"assets/images/4.jpg", id:""},
          ]
        },
        {
          data : [
            {type:"text", value:"Some Name"},
            {type:"image", src:"assets/images/5.jpg"},
          ]
        },
        {
          data : [
            {type:"text", value:"Some Name"},
            {type:"image", src:"assets/images/5.jpg"},
          ]
        },
        {
          data : [
            {type:"image", src:"assets/images/5.jpg"},
            {type:"image", src:"assets/images/6.jpg"},
          ]
        },
        {
          data : [
            {type:"image", src:"assets/images/5.jpg"},
            {type:"image", src:"assets/images/6.jpg"},
          ]
        },
        {
          data : [
            {type:"text", value:"Some value goes here"},
          ]
        },
        {
          data : [
            {type:"image", src:"assets/images/7.jpg"},
            {type:"image", src:"assets/images/8.jpg"},
            {type:"image", src:"assets/images/9.jpg"},
            {type:"image", src:"assets/images/10.jpg"}
          ]
        },
        {
          data : [
            {type:"text", value:"Some Name"},
            {type:"image", src:"assets/images/11.jpg"},
          ]
        },
        {
          data : [
            {type:"text", value:"Some Name"},
            {type:"image", src:"assets/images/12.jpg"},
          ]
        },
        {
          data : [
            {type:"image", src:"assets/images/13.jpg"},
            {type:"image", src:"assets/images/14.jpg"},
            {type:"image", src:"assets/images/15.jpg"},
            {type:"image", src:"assets/images/16.jpg"}
          ]
        },
        {
          data : [
            {type:"image", src:"assets/images/17.jpg"},
            {type:"image", src:"assets/images/18.jpg"},
            {type:"image", src:"assets/images/19.jpg"},
            {type:"image", src:"assets/images/20.jpg"}
          ]
        },
        {
          data : [
            {type:"image", src:"assets/images/21.jpg"},
            {type:"image", src:"assets/images/8.jpg"},
            {type:"image", src:"assets/images/9.jpg"},
            {type:"image", src:"assets/images/10.jpg"}
          ]
        }

      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  trimTableHeader(header) {
    return (header.substring(14,0)+"...");
  }
}

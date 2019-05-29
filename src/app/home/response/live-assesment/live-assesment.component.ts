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
  data = {}

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


        // this.tableHeader = [
        //   {
        //     colspan: 1,
        //     data: "Assessor"
        //   },
        //   {
        //     colspan: 1,
        //     data: "Vendor"
        //   },
        //   {
        //     colspan: 1,
        //     data: "physical_location"
        //   },
        //   {
        //     colspan: 2,
        //     data: "basic_information"
        //   },
        //   {
        //     colspan: 1,
        //     data: "process_capability"
        //   },
        //   {
        //     colspan: 1,
        //     data: "production_capacity"
        //   },
        //   {
        //     colspan: 1,
        //     data: "suppliers"
        //   },
        //   {
        //     colspan: 1,
        //     data: "transportation"
        //   },
        //   {
        //     colspan: 2,
        //     data: "safety"
        //   },
        //   {
        //     colspan: 3,
        //     data: "research_and_development"
        //   },
        //   {
        //     colspan: 1,
        //     data: "additional_images"
        //   },
        //   {
        //     colspan: 1,
        //     data: "additional_documents"
        //   },
        //   {
        //     colspan: 1,
        //     data: "quality"
        //   },
        //   {
        //     colspan: 1,
        //     data: "video"
        //   }
        // ]
        //
        // this.tableSubHeaders = [
        //   {
        //     name: "Asessor"
        //   },
        //   {
        //     name: "Vendor"
        //   },
        //   {
        //     name: "Geotagged Assessment"
        //   },
        //   {
        //     name: "What is the name of the official taking part in the assessment?"
        //   },
        //   {
        //     name: "Designation of the official in the firm?"
        //   },
        //   {
        //     name: "Show the process of production of the product."
        //   },
        //   {
        //     name: "Show the machines critical for production for the product."
        //   },
        //   {
        //     name: "What key aspects are focussed while selecting suppliers?"
        //   },
        //   {
        //     name: "Show the transport facility."
        //   },
        //   {
        //     name: "Are there any effective signs and labels for safety?"
        //   },
        //   {
        //     name: "Are there any fire extinguisher and other safety equipment in sight?"
        //   },
        //   {
        //     name: "Show the R&D facility."
        //   },
        //   {
        //     name: "Show the products/processes for which patents have been obtained."
        //   },
        //   {
        //     name: "Show prototype if any."
        //   },
        //   {
        //     name: "Any other additional images "
        //   },
        //   {
        //     name: "Any other additional documents "
        //   },
        //   {
        //     name: "Explain the process of quality assurance ? (Discussion with quality manager)"
        //   },
        //   {
        //     name: "video"
        //   }
        // ]
        //
        // this.tableResponse = [
        //   {
        //     responseData: [
        //       {
        //         data: [
        //           {
        //             type: "text",
        //             value: "shubham"
        //           }
        //         ]
        //       },
        //       {
        //         data: [
        //           {
        //             type: "text",
        //             value: "mahawar"
        //           }
        //         ]
        //       },
        //       {
        //         data: [
        //           {
        //             id: "ada9e949d972446a8153ced5c93a4db6",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/ada9e949d972446a8153ced5c93a4db6",
        //             type: "image"
        //           }
        //         ]
        //       },
        //       {
        //         data: []
        //       },
        //       {
        //         data: []
        //       },
        //       {
        //         data: [
        //           {
        //             id: "103d81b6e32a4f70986cff1ec15b47e0",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/103d81b6e32a4f70986cff1ec15b47e0",
        //             type: "image"
        //           }
        //         ]
        //       },
        //       {
        //         data: []
        //       },
        //       {
        //         data: []
        //       },
        //       {
        //         data: []
        //       },
        //       {
        //         data: []
        //       },
        //       {
        //         data: []
        //       },
        //       {
        //         data: []
        //       },
        //       {
        //         data: []
        //       },
        //       {
        //         data: []
        //       },
        //       {
        //         data: []
        //       },
        //       {
        //         data: []
        //       },
        //       {
        //         data: []
        //       },
        //       {
        //         data: [
        //           {
        //             src: "1",
        //             type: "video"
        //           },
        //           {
        //             src: "2",
        //             type: "video"
        //           },
        //           {
        //             src: "#",
        //             type: "video"
        //           }
        //         ]
        //       }
        //     ]
        //   },
        //   {
        //     responseData: [
        //       {
        //         data: [
        //           {
        //             type: "text",
        //             value: "shubham"
        //           }
        //         ]
        //       },
        //       {
        //         data: [
        //           {
        //             type: "text",
        //             value: "mahawar"
        //           }
        //         ]
        //       },
        //       {
        //         data: [
        //           {
        //             id: "377d26a3c0bc47c787a40884a1858099",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/377d26a3c0bc47c787a40884a1858099",
        //             type: "image"
        //           },
        //           {
        //             id: "d1af3ac5270343dea676ee72c6d150b8",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/d1af3ac5270343dea676ee72c6d150b8",
        //             type: "image"
        //           },
        //           {
        //             id: "b1ff7f118a1f406395b860372242400c",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/b1ff7f118a1f406395b860372242400c",
        //             type: "image"
        //           },
        //           {
        //             id: "4705852fb59d421a85a274e2476e623b",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/4705852fb59d421a85a274e2476e623b",
        //             type: "image"
        //           },
        //           {
        //             id: "4b5a913ca3df493c9373f7ef1e84d298",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/4b5a913ca3df493c9373f7ef1e84d298",
        //             type: "image"
        //           },
        //           {
        //             id: "f244cbd98dc7459e9377b4903b3e68cf",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/f244cbd98dc7459e9377b4903b3e68cf",
        //             type: "image"
        //           },
        //           {
        //             id: "263597a18e44410b8e37a229972c23da",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/263597a18e44410b8e37a229972c23da",
        //             type: "image"
        //           },
        //           {
        //             id: "0c856a4349dc4eabaf6b7b79e18d330a",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/0c856a4349dc4eabaf6b7b79e18d330a",
        //             type: "image"
        //           },
        //           {
        //             id: "2f0426bf77fb4000b5138ca424828f0b",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/2f0426bf77fb4000b5138ca424828f0b",
        //             type: "image"
        //           }
        //         ]
        //       },
        //       {
        //         data: [
        //           {
        //             id: "9ddddedbb62a4af59e524c91f771ec0b",
        //             type: "text",
        //             value: "jhb"
        //           }
        //         ]
        //       },
        //       {
        //         data: [
        //           {
        //             id: "daf823b88d13444a8f8c2a5ec27414c4",
        //             type: "text",
        //             value: "deepak"
        //           }
        //         ]
        //       },
        //       {
        //         data: [
        //           {
        //             id: "cca7448aa24d46a7b260ad60fcfca3a3",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/cca7448aa24d46a7b260ad60fcfca3a3",
        //             type: "image"
        //           }
        //         ]
        //       },
        //       {
        //         data: [
        //           {
        //             id: "0384927a21dd4ab8855233d8f7c3c393",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/0384927a21dd4ab8855233d8f7c3c393",
        //             type: "image"
        //           }
        //         ]
        //       },
        //       {
        //         data: [
        //           {
        //             id: "6fb856a6d27548c1b1820a834aa61056",
        //             type: "text",
        //             value: "galti se image agaya"
        //           }
        //         ]
        //       },
        //       {
        //         data: [
        //           {
        //             id: "fe1e739e1e864e628babd46027a4a476",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/fe1e739e1e864e628babd46027a4a476",
        //             type: "image"
        //           },
        //           {
        //             id: "25e5a6e863134014adf7fc3a225d2ccd",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/25e5a6e863134014adf7fc3a225d2ccd",
        //             type: "image"
        //           }
        //         ]
        //       },
        //       {
        //         data: [
        //           {
        //             id: "4ffce6b30d0e4307bbb06bc24efb75dd",
        //             type: "text",
        //             value: "No"
        //           }
        //         ]
        //       },
        //       {
        //         data: [
        //           {
        //             id: "ae0e551970f941d2bdef082ba90107aa",
        //             type: "text",
        //             value: "No"
        //           }
        //         ]
        //       },
        //       {
        //         data: [
        //           {
        //             id: "bbc44aae82bb4d1896d2bda2366bcd04",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/bbc44aae82bb4d1896d2bda2366bcd04",
        //             type: "image"
        //           },
        //           {
        //             id: "169403b385074f9d8477cd202799b0d2",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/169403b385074f9d8477cd202799b0d2",
        //             type: "image"
        //           },
        //           {
        //             id: "a2eb427367aa4bba97dcd7e85bf68c4d",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/a2eb427367aa4bba97dcd7e85bf68c4d",
        //             type: "image"
        //           },
        //           {
        //             id: "54a365f1c3b648c88d23380b440b6d96",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/54a365f1c3b648c88d23380b440b6d96",
        //             type: "image"
        //           },
        //           {
        //             id: "ef519050c83b45f0b1ae089fbcddd95a",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/ef519050c83b45f0b1ae089fbcddd95a",
        //             type: "image"
        //           }
        //         ]
        //       },
        //       {
        //         data: [
        //           {
        //             id: "6dfa5d0768d14c40b66e5f21a7735bbf",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/6dfa5d0768d14c40b66e5f21a7735bbf",
        //             type: "image"
        //           },
        //           {
        //             id: "6a19afcb8bdb4aa9a0e8cdfadfbe3d75",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/6a19afcb8bdb4aa9a0e8cdfadfbe3d75",
        //             type: "image"
        //           },
        //           {
        //             id: "1005d0d42df342a6be4bb5c789fcbda4",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/1005d0d42df342a6be4bb5c789fcbda4",
        //             type: "image"
        //           }
        //         ]
        //       },
        //       {
        //         data: [
        //           {
        //             id: "6471b86addbe4901a948cbbc92433507",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/6471b86addbe4901a948cbbc92433507",
        //             type: "image"
        //           }
        //         ]
        //       },
        //       {
        //         data: []
        //       },
        //       {
        //         data: [
        //           {
        //             id: "f1090e75f455421db1b8200b05f124d7",
        //             src: "https://s3.ap-south-1.amazonaws.com/opentok-qci/f1090e75f455421db1b8200b05f124d7",
        //             type: "image"
        //           }
        //         ]
        //       },
        //       {
        //         data: []
        //       },
        //       {
        //         data: [
        //           {
        //             src: "1",
        //             type: "video"
        //           },
        //           {
        //             src: "2",
        //             type: "video"
        //           },
        //           {
        //             src: "#",
        //             type: "video"
        //           }
        //         ]
        //       }
        //     ]
        //   }
        // ]


        console.log(this.tableHeader)
        console.log(this.tableSubHeaders)
        console.log(this.tableResponse)

        this.displayLiveAssesment = true

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
        this.projectService.getLiveAssesment(this.data)
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

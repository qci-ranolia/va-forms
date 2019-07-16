import { Component, OnInit, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ImagesComponent } from '../images/images.component'

@Component({
  selector: 'app-rdev',
  templateUrl: './rdev.component.html',
  styleUrls: ['./rdev.component.scss']
})
export class RdevComponent implements OnInit {
  protoQuesId: any = "fcd78c9801b9adaf9ff9052f66980b54"
  processQuesId: any = "0e5a8c50bc4caae87205619ff21f79cb"
  facilityQuesId: any = "7688840f61caa4597471ce0b019302d3"
  show: any;

  request : any
  protoRequest : any
  processRequest : any
  facilityRequest : any
  requestData : any
  db : any
  vendorStore : any  
  cursor : any
  offlineFormData : any = new Array()
  transaction : any

  @ViewChild('parent3', { read: ViewContainerRef }) container3: ViewContainerRef;
  @ViewChild('parent4', { read: ViewContainerRef }) container4: ViewContainerRef;
  @ViewChild('parent5', { read: ViewContainerRef }) container5: ViewContainerRef;

  constructor(private _cfr: ComponentFactoryResolver  ) { }

  ngOnInit() {
    this.show = localStorage.getItem("form_status")
    if(navigator.onLine) {
      this.preFilledData3()
      this.preFilledData4()
      this.preFilledData5()
    } else {
      if(window.indexedDB){
        this.request = window.indexedDB.open("offlineForms", 1)
        // console.log(this.request)
        this.request.onerror = ( event : any ) => {
          console.error("error while getting offlineforms in anymoreimages")
          // this.ProjectService.openErrMsgBar("We could not save your data.", "OFFLINE!", 8000)
        }
        this.request.onsuccess = (event:any)=>{
          this.db = this.request.result
          this.transaction = this.db.transaction(["vendorStore"])
          // console.log("%c this.transaction is ", "color:#800", this.transaction)

          this.vendorStore = this.transaction.objectStore("vendorStore")
          // console.log("%c this.vendorStore is ", "color:#880", this.vendorStore)

          this.facilityRequest = this.vendorStore.get(this.facilityQuesId)
          .onerror = (event : any) => {
            console.error("Image corresponding to this.facilityQuesId could not be fetched successfully ", event)
          }
          this.facilityRequest.onsuccess = (event : any) => {
            let x = event.target.result.data
            this.offlinePreFilledData3(x)          
          }
          this.processRequest = this.vendorStore.get(this.processQuesId)
          .onerror = (event : any) => {
            console.error("Image corresponding to this.processQuesId could not be fetched successfully ", event)
          }
          this.processRequest.onsuccess = (event : any) => {
            let x = event.target.result.data
            this.offlinePreFilledData4(x)          
          }
          this.protoRequest = this.vendorStore.get(this.protoQuesId)
          .onerror = (event : any) => {
            console.error("Image corresponding to this.protoQuesId could not be fetched successfully ", event)
          }
          this.protoRequest.onsuccess = (event : any) => {
            let x = event.target.result.data
            this.offlinePreFilledData5(x)          
          }
        }
        this.request.onupgradeneeded = (event:any) => {
          this.db = event.target.result
          this.vendorStore =  this.db.createObjectStore("vendorStore", { keyPath:"question_id" })
          // for ( var i in this.emp ) {
          //     this.objectStore.add(this.emp[i])
          // }
        }
      }
    }
  }

  addComponent3(questionId, dataId,src){
    // Check and resolve the component
    var comp = this._cfr.resolveComponentFactory(ImagesComponent);
    // Create component inside container
    var expComponent:ComponentRef<ImagesComponent> = this.container3.createComponent(comp);
    // See explanations
    expComponent.instance.question_id = questionId
    expComponent.instance.data_id = dataId
    expComponent.instance.src = src;

    expComponent.instance._ref = expComponent;
  }

  addComponent4(questionId, dataId,src){
    // Check and resolve the component
    var comp = this._cfr.resolveComponentFactory(ImagesComponent);
    // Create component inside container
    var expComponent:ComponentRef<ImagesComponent> = this.container4.createComponent(comp);
    // See explanations
    expComponent.instance.question_id = questionId
    expComponent.instance.data_id = dataId
    expComponent.instance.src = src;

    expComponent.instance._ref = expComponent;
  }


  addComponent5(questionId, dataId,src){
    // Check and resolve the component
    var comp = this._cfr.resolveComponentFactory(ImagesComponent);
    // Create component inside container
    var expComponent:ComponentRef<ImagesComponent> = this.container5.createComponent(comp);
    // See explanations
    expComponent.instance.question_id = questionId
    expComponent.instance.data_id = dataId
    expComponent.instance.src = src;

    expComponent.instance._ref = expComponent;
  }

  offlinePreFilledData3(x){
    if (x) x.filter(el => this.addComponent3(this.facilityQuesId, el.data_id, el.src))
  }

  offlinePreFilledData4(x){
    if (x) x.filter(el => this.addComponent4(this.processQuesId, el.data_id, el.src))
  }

  offlinePreFilledData5(x){
    if (x) x.filter(el => this.addComponent5(this.protoQuesId, el.data_id, el.src))
  }

  preFilledData3(){
    let storedData : any = JSON.parse(localStorage.getItem(this.facilityQuesId))
    // console.log("storedata is ", storedData)
    // if (storedData) storedData.filter(el=> this.addComponent(el.data_id, el.src) )
    // this.presentData = storedData
    if (storedData) storedData.filter(el=> this.addComponent3(this.facilityQuesId, el.data_id, el.src) )
  }

  preFilledData4(){
    let storedData : any = JSON.parse(localStorage.getItem(this.processQuesId))
    // console.log("storedata is ", storedData)
    // if (storedData) storedData.filter(el=> this.addComponent(el.data_id, el.src) )
    // this.presentData = storedData
    if (storedData) storedData.filter(el=> this.addComponent4(this.processQuesId, el.data_id, el.src) )
  }

  preFilledData5(){
    let storedData : any = JSON.parse(localStorage.getItem(this.protoQuesId))
    // console.log("storedata is ", storedData)
    // if (storedData) storedData.filter(el=> this.addComponent(el.data_id, el.src) )
    // this.presentData = storedData
    if (storedData) storedData.filter(el=> this.addComponent5(this.protoQuesId, el.data_id, el.src) )
  }

}

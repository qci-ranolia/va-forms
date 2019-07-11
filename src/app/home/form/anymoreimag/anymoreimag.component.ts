import { Component, OnInit, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { ImagesComponent } from '../images/images.component'


@Component({
  selector: 'app-anymoreimag',
  templateUrl: './anymoreimag.component.html',
  styleUrls: ['./anymoreimag.component.scss']
})
export class AnymoreimagComponent implements OnInit {

  // this needs to be changed based on the backend question_id
  questionId : any = "065af52b6c0c07cc26771f6534b6b5e0"
  show: any;

  request : any
  requestData : any
  db : any
  imageStore : any
  textStore : any
  cursor : any
  offlineFormData : any = new Array()
  transaction : any

  @ViewChild('parent', { read: ViewContainerRef }) container: ViewContainerRef;
  constructor(private _cfr: ComponentFactoryResolver, ) {}

  ngOnInit() {
    this.show = localStorage.getItem("form_status")
    if(navigator.onLine) {
      this.preFilledData()
    } else {
      if(window.indexedDB){
        this.request = window.indexedDB.open( "offlineForms", 1 )
        this.request.onerror = ( event : any ) => {
          // this.ProjectService.openErrMsgBar("We could not save your data.", "OFFLINE!", 8000)
        }
        this.request.onsuccess = ( event : any ) => {
          this.db = this.request.result
          console.log(this.db)
          this.transaction = this.db.transaction(["imageStore"])
          console.log("this.transaction ", this.transaction)
          this.imageStore = this.transaction.objectStore("imageStore")
          console.log("this.objectStore ", this.imageStore)
          this.requestData = this.imageStore.get(this.questionId)
          this.requestData.onerror = (event : any) => {
            console.error(event)
          }
          this.requestData.onsuccess = (event : any) => {
            console.log("event is ", event.target.result)
            let src = event.target.result.file_data
            let data_id = event.target.result.data_id
            this.addComponent(this.questionId, data_id, src)
          }
        }
        this.request.onupgradeneeded = ( event : any ) => {
          this.db = event.target.result
          this.imageStore = this.db.createObjectStore("imageStore", { keyPath : "question_id" })
          // for ( var i in this.offlineFormData ) {
          //   this.imageStore.add(this.offlineFormData[i])
          // }
        }
      } else {
        // this.ProjectService.openErrMsgBar("This application does not work offline properly", "Offline Incompatible", 4000)
      }
    }
  }

  addComponent(questionId, dataId, src){
    // Check and resolve the component
    var comp = this._cfr.resolveComponentFactory(ImagesComponent);
    // Create component inside container
    var expComponent:ComponentRef<ImagesComponent> = this.container.createComponent(comp);
    // See explanations
    expComponent.instance.question_id = questionId
    expComponent.instance.data_id = dataId
    expComponent.instance.src = src;

    expComponent.instance._ref = expComponent;
  }

  preFilledData(){
    let storedData : any = JSON.parse(localStorage.getItem(this.questionId))
    console.log("storedata is ", storedData)
      // if (storedData) storedData.filter(el=> this.addComponent(el.data_id, el.src) )
      // this.presentData = storedData
    if (storedData) storedData.filter(el=> this.addComponent(this.questionId, el.data_id, el.src) )
  }

}

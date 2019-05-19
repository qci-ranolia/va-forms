import { Component, OnInit, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ImagesComponent } from '../form/images/images.component'

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
  @ViewChild('parent3', { read: ViewContainerRef }) container3: ViewContainerRef; 
  @ViewChild('parent4', { read: ViewContainerRef }) container4: ViewContainerRef; 
  @ViewChild('parent5', { read: ViewContainerRef }) container5: ViewContainerRef; 
  
  constructor(private _cfr: ComponentFactoryResolver  ) { }

  ngOnInit() {
    this.show = localStorage.getItem("form_status")
    this.preFilledData3()
    this.preFilledData4()
    this.preFilledData5()
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

import { Component, OnInit, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ImagesComponent } from '../images/images.component'

@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent implements OnInit {

  questionId : any = "a8b1b449ee5be4e3e8ffc5f1dedb23f6"
  show : any
  @ViewChild('parent', { read: ViewContainerRef }) container: ViewContainerRef;
  constructor(private _cfr: ComponentFactoryResolver ) { }

  ngOnInit() {
    this.show = localStorage.getItem("form_status")
    this.preFilledData()
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

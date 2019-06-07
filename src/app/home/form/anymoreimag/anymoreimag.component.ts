import { Component, OnInit, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { ImagesComponent } from '../images/images.component' 


@Component({
  selector: 'app-anymoreimag',
  templateUrl: './anymoreimag.component.html',
  styleUrls: ['./anymoreimag.component.scss']
})
export class AnymoreimagComponent implements OnInit {

  // this needs to be changed based on the backend question_id
  questionId : any = "6fb7d835b1433cb8a8b69b8a616950af"
  show: any;

  @ViewChild('parent', { read: ViewContainerRef }) container: ViewContainerRef; 
  constructor(private _cfr: ComponentFactoryResolver, ) { }

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

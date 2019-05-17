import { Component, OnInit, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ImagesComponent } from '../form/images/images.component'

@Component({
  selector: 'app-prodcapac',
  templateUrl: './prodcapac.component.html',
  styleUrls: ['./prodcapac.component.scss']
})
export class ProdcapacComponent implements OnInit {

  questionId : any = "54852977a1d19ad2cf79587dc6559b7c"

  @ViewChild('parent', { read: ViewContainerRef }) container: ViewContainerRef; 
  
  constructor(private _cfr: ComponentFactoryResolver  ) { }

  ngOnInit() {
    this.preFilledData()
  }

  addComponent(questionId, dataId,src){
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
    // console.log("storedata is ", storedData)
    // if (storedData) storedData.filter(el=> this.addComponent(el.data_id, el.src) )
    // this.presentData = storedData
    if (storedData) storedData.filter(el=> this.addComponent(this.questionId, el.data_id, el.src) )
  }
}
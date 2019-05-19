import { Component, OnInit, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ImagesComponent } from '../form/images/images.component' 

@Component({
  selector: 'app-proccapab',
  templateUrl: './proccapab.component.html',
  styleUrls: ['./proccapab.component.scss']
})
export class ProccapabComponent implements OnInit {

  questionId : any = "037891c729514fc530b74b2a71891c00"
  show: any
  @ViewChild('parent2', { read: ViewContainerRef }) container: ViewContainerRef; 
  
  constructor(private _cfr: ComponentFactoryResolver  ) { }

  ngOnInit() {
    this.show = localStorage.getItem("form_status")
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

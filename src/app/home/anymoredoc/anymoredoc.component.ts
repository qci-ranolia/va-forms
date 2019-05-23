import { Component, OnInit, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { FilesComponent } from '../form/files/files.component'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anymoredoc',
  templateUrl: './anymoredoc.component.html',
  styleUrls: ['./anymoredoc.component.scss']
})
export class AnymoredocComponent implements OnInit {
  questionId:any = "6bf7aaf92d848eaf25689fc1b2dca435"
  show: any;

  urlParaName:any

  @ViewChild('parent', { read: ViewContainerRef }) container: ViewContainerRef; 
  constructor(private route: ActivatedRoute, private _cfr: ComponentFactoryResolver, ) {
    this.urlParaName = this.route.snapshot.paramMap    
    console.log(this.urlParaName)    
  }

  ngOnInit() {
    console.log(this.questionId)

    this.show = localStorage.getItem("form_status")

    this.preFilledData()
  }

  addComponent(dataId, src){
    console.log(this.questionId)
    // Check and resolve the component
    var comp = this._cfr.resolveComponentFactory(FilesComponent);
    // Create component inside container
    var expComponent:ComponentRef<FilesComponent> = this.container.createComponent(comp);
    // See explanations
    expComponent.instance.question_id = this.questionId
    expComponent.instance.data_id = dataId
    expComponent.instance.src = src;

    expComponent.instance._ref = expComponent;
  }

  preFilledData(){

  let storedData : any = JSON.parse(localStorage.getItem(this.questionId))
  console.log("storedata is ", storedData)
    // if (storedData) storedData.filter(el=> this.addComponent(el.data_id, el.src) )
    // this.presentData = storedData
    if (storedData) storedData.filter(el=> this.addComponent(el.data_id, el.src) )

  }
}

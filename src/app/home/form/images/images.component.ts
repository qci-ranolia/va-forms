import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../../../service/ProjectService';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  _ref:any;
  images:any;
  @Input() src:any
  // imageName:string
  @Input() data_id:any
  @Input() question_id:any
  
  constructor(private ProjectService: ProjectService ) {

    // console.log(this.question_id)  
  }
  
  removeObject(){
    var temp = {
      form_id:localStorage.getItem('form_id'),
      question_id:this.question_id,
      data_id:this.data_id
    }
    // console.log(temp)
    this.ProjectService.deleteImage(temp)
    let storedData : any = JSON.parse(localStorage.getItem(this.question_id))

    let v = storedData.filter(item => item.data_id !== this.data_id);
    
    localStorage.setItem(this.question_id, JSON.stringify(v))
    this._ref.destroy();
  }

  // upload(){
  //   var element : HTMLElement = document.getElementById(this.question_id) as HTMLElement;
  //   element.click()
  // }

  browseImages($event){
    let files = $event.target.files || $event.srcElement.files
    // let data_id : any = localStorage.getItem(this.question_id)
    // this.imageName = $event.target.value
    // console.log(this.imageName)
    let reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onload = (event:any) => {
      this.src = reader.result
      // error while 
      var temp = {
        form_id : localStorage.getItem('form_id'),
        question_id : this.question_id,
        file_data : this.src,
        is_submit : false,
        data_id : this.data_id
      }
      // console.log(temp)
      // this.ProjectService.postFormDetails(temp)
      this.ProjectService.imageArray(temp)
      this.ProjectService.emitImageData_Id.subscribe(el=>{
        this.data_id = el
        // console.log("el is ", el)
        this.storedData()
      })
    }


  }

  storedData(){
    // localStorage.setItem(this.question_id, JSON.stringify(rd))
      // storedData must be an emoty array
      let storedData : any = JSON.parse(localStorage.getItem(this.question_id))
      console.log("storedData is ", storedData)
      let x:any = []
      if (storedData){
        x = storedData.filter(el => el.data_id == this.data_id )
      }
      let newItem:any = {
        data_id:this.data_id,
        src:this.src
      }

      if (x.length == 0 ){

        storedData.push(newItem)
        console.log("new stored data", storedData)
        localStorage.setItem(this.question_id, JSON.stringify(storedData))
      } else {
        let v : any = storedData.filter(item => item.data_id !== this.data_id);
        console.log("v is ", v)
        v.push(newItem)
        localStorage.setItem(this.question_id, JSON.stringify(v))
      }
  }

  ngOnInit() {
  }

}

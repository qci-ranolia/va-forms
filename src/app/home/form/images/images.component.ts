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
  src:any
  imageName:string
  
  @Input() question_id:any
  
  constructor(private ProjectService: ProjectService ) {
    // console.log(this.question_id)  
  }
  
  removeObject(){
    var temp = {
      form_id:localStorage.getItem('form_id'),
      question_id:this.question_id,
      data_id:localStorage.getItem(this.question_id)
    }
    console.log(temp)
    this.ProjectService.deleteImage(temp)
    this._ref.destroy();
  }

  // upload(){
  //   var element : HTMLElement = document.getElementById(this.question_id) as HTMLElement;
  //   element.click()
  // }

  browseImages($event){
    let files = $event.target.files || $event.srcElement.files
    let data_id : any = localStorage.getItem(this.question_id)
    this.imageName = $event.target.value
    // console.log(this.imageName)
    let reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onload = (event:any) => {
      this.src = reader.result
      var temp = {
        form_id : 'form_id_02',
        question_id : this.question_id,
        file_data : this.src,
        is_submit : false,
        data_id : data_id
      }
      // console.log(temp)
      this.ProjectService.postFormDetails(temp)
    }
  }

  ngOnInit() {
  }

}

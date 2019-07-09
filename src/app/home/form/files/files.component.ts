import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../../../service/ProjectService';
import { APIService } from '../../../service/APIService';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  _ref:any;
  images:any;
  @Input() src:any
  // imageName:string
  @Input() data_id:any
  @Input() question_id:any
  show: string
  pdfSrc: any
  offline:boolean=false
  constructor( private APIService: APIService, private ProjectService: ProjectService, private http: HttpClient ) {
    this.show = localStorage.getItem("form_status")
    console.log("Form status is ", this.show)

    // console.log(this.question_id)  
  }
  ngOnInit() {}
  
  removeObject(){
    var temp = {
      form_id:localStorage.getItem('form_id'),
      question_id:this.question_id,
      data_id:this.data_id
    }
    // console.log(temp)
    this.ProjectService.openErrMsgBar("Please wait...","Syncing!", 4000)
    setTimeout(()=>{      
      this.ProjectService.deleteImage(temp)
      let storedData : any = JSON.parse(localStorage.getItem(this.question_id))

      let v = storedData.filter(item => item.data_id !== this.data_id);
      
      localStorage.setItem(this.question_id, JSON.stringify(v))
    }, 1500);
    
    this._ref.destroy();
  }

  // upload(){
  //   var element : HTMLElement = document.getElementById(this.question_id) as HTMLElement;
  //   element.click()
  // }

  browsePdfs($event){
    let files = $event.target.files || $event.srcElement.files
    // let data_id : any = localStorage.getItem(this.question_id)
    // this.imageName = $event.target.value
    // console.log(this.imageName)
    let reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onload = (event:any) => {
      // console.log(this.src)
      this.src = reader.result
      // error while 
      var temp = {
        form_id : localStorage.getItem('form_id'),
        question_id : this.question_id,
        file_data : this.src,
        is_submit : false,
        data_id : this.data_id
      }
      // this.ProjectService.postFormDetails(temp)
      this.ProjectService.openErrMsgBar("Please wait...","Syncing!", 4000)
      setTimeout(()=>{
        if(navigator.onLine){
          this.offline = false
          console.log("You are Online")
          this.ProjectService.imageArray(temp)
          this.ProjectService.emitImageData_Id.subscribe(el=>{
            // this.http.post(JSON.parse(el)[0].src, {responseType: 'arraybuffer'})
            //   .subscribe((el:Blob) => {
            //     var file = new Blob([el], {type: 'application/pdf'});
            //     var fileURL = URL.createObjectURL(file);
            //     console.log(file)
            //     console.log(fileURL)
            //     // window.open(fileURL);
            //   })
            let fileURL:any, file:any  
            var xhr = new XMLHttpRequest();
            xhr.open('GET', JSON.parse(el)[0].src, true)
            xhr.responseType = 'arraybuffer'
            xhr.onload = function(e){
              if(this.status == 200){
                file = new Blob([this.response], {type: 'application/pdf'})
                fileURL = window.URL.createObjectURL(file)
                // console.log("fileURL is ", fileURL)
                document.querySelector("iframe").src = fileURL
              }
            }
            xhr.send()
            this.storedData()
          })
        }
        else {
          this.offline = true
          this.ProjectService.openErrMsgBar("You are offline", "Please go online!", 4000)            
          console.error("You are Offline")
        }
      }, 1500)
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

}
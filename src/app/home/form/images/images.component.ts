import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../../../service/ProjectService';
import { ImageCompressService } from  'ng2-image-compress';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})

export class ImagesComponent implements OnInit {
  _ref:any;
  images:any;
  @Input() src:any
  @Input() data_id:any
  @Input() question_id:any
  show: string
  offline:boolean = false
  files:any


  request : any
  db : any
  objectStore : any
  cursor : any
  offlineFormData : any = new Array()
  transaction : any


  processedImages:any
  showTitle:any
  
  constructor(private ProjectService: ProjectService, private imgCompressService: ImageCompressService ) {
    this.show = localStorage.getItem("form_status")
    this.request = window.indexedDB.open("offlineForms", 1.2)
    console.log("this.request from image component is ", this.request)
    this.request.onerror = ( event : any ) => {
      console.error("error")
    }
    this.request.onsuccess = ( event : any ) => {
        this.db = this.request.result
    }
  }

  ngOnInit(){
  }

  removeObject(){
    var temp = {
      form_id:localStorage.getItem('form_id'),
      question_id:this.question_id,
      data_id:this.data_id
    }
    // console.log(temp)
    this.ProjectService.openErrMsgBar("Please wait...","Syncing!", 4000)
    setTimeout(()=> {
      this.ProjectService.deleteImage(temp)
      let storedData : any = JSON.parse(localStorage.getItem(this.question_id))
      let v = storedData.filter(item => item.data_id !== this.data_id);
      localStorage.setItem(this.question_id, JSON.stringify(v))
    }, 1500);
    this._ref.destroy();
  }
  
  browseImages($event) {
    if ($event !== null){
      this.files = $event.target.files || $event.srcElement.files
    }
    // let data_id : any = localStorage.getItem(this.question_id)
    // this.imageName = $event.target.value
    // console.log(this.imageName)
    
    let images : any //: Array<IImage> = [];
    ImageCompressService.filesToCompressedImageSource(this.files).then(observableImages => {
      observableImages.subscribe((image) => {
        this.src = image.compressedImage.imageDataUrl;
      }, (error) => {
        alert('Please try again later.')
        // console.log("%c Error while converting","color: blue")
      }, () => {
        // this.processedImages = images;
        // this.showTitle = true;
        var temp = {
          form_id : localStorage.getItem('form_id'),
          question_id : this.question_id,
          file_data : this.src,
          is_submit : false,
          data_id : this.data_id
        }
        // this.ProjectService.postFormDetails(temp)
        if ($event !== null) this.ProjectService.openErrMsgBar("Please wait...","Syncing!", 4000)
        setTimeout(() => {
          if(navigator.onLine) {
            this.offline = false
            console.log("You are Online")
            this.ProjectService.imageArray(temp)
            this.ProjectService.emitImageData_Id.subscribe( el => {
              // console.log(el)
              // this.data_id = el.data_id
              // this.src = el.source
              this.storedData()
            })
          }
          else {
            this.offline = true
            let question_id = this.question_id
            
            let xx : any = {
              question_id : [
                {
                  
                }
              ]
            }            
            this.request = this.db.transaction(["imageStore"], "readwrite")
            .objectStore("imageStore")
            .add(temp)
            this.request.onerror = (event:any) => {
                console.error("error")
            }
            this.request.onsuccess = (event:any) => {
                console.log("event is ", event)
            }
            this.ProjectService.openErrMsgBar("We are trying to connect to the internet. Data will be uploaded once you will be online.", "OFFLINE!", 10000)
            this.looper()
            // this.browseImages(null)
            console.error("You are Offline")
          }
        }, 1500);
      });
    });
  }

  looper() {
    console.warn("Running...")
    this.browseImages(null)
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

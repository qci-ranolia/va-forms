import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    
    title = 'opentiktokapp';
    
    // request : any
    // db : any
    // textStore : any
    // imageStore : any
    // cursor : any
    // offlineFormData : any = new Array()
    // transaction : any

    constructor( private swUpdate: SwUpdate, private router:Router ) {
        const navEndEvents = this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        )
        navEndEvents.subscribe((event:NavigationEnd)=>{
            gtag('config', 'UA-122661218-2', {
                'page_path' : event.urlAfterRedirects
            })
        })
    }

    ngOnInit(){
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(() => {
                if(confirm("New version available. Load New Version?")) { 
                    window.location.reload();
                }
            })
        }
    }

    // readAll(){
    //     this.objectStore = this.db.transaction("emp").objectStore("emp")
    //     this.objectStore.openCursor().onsuccess = (event : any) => {
    //         this.cursor = event.target.result
    //         if(this.cursor){
    //             alert("Name for id "/*+ this.cursor.value.id */+ " is " + this.cursor.value.name + ", Age: " + this.cursor.value.age)
    //             this.cursor.continue()
    //         }
    //     }
    // }

    // add(){
    //     this.request = this.db.transaction(["emp"],"readwrite")
    //     .objectStore("emp")
    //     .add({ id : "03", name : "deepakzzz", age : 26 })
    //     this.request.onerror = (event:any) => {
    //         console.error("error")
    //     }
    //     this.request.onsuccess = (event:any) => {
    //         console.log("event is ", event)
    //     }
    // }

    // get(){
    //     this.transaction = this.db.transaction(["emp"])
    //     console.log("this.transaction ", this.transaction)

    //     this.objectStore = this.transaction.objectStore("emp")
    //     console.log("this.objectStore ", this.objectStore)
        
    //     this.request = this.objectStore.get("01")
    //     console.log("this.request ", this.request)

    //     this.request.onerror = (event : any) => {
    //         console.error(event)
    //     }
    //     this.request.onsuccess = (event : any) => {
    //         console.log("event is ", event)
    //     }
    // }

    // remove(){
    //     this.request = this.db.transaction(["emp"],"readwrite")
    //     .objectStore("emp")
    //     .delete("03")
    //     this.request.onerror = (event:any) => {
    //         console.error("error")
    //     }
    //     this.request.onsuccess = (event:any) => {
    //         console.log("event is ", event)
    //     }
    // }

}
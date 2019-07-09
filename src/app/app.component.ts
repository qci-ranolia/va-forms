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
    
    request : any
    db : any
    textStore : any
    imageStore : any
    cursor : any
    offlineFormData : any = new Array()
    transaction : any

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
        //      window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
        //      IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction,
        //      dbVersion = 1;
        
        if( window.indexedDB ){
            this.request = window.indexedDB.open( "offlineForms", 1.2 )
            console.log("this.request from app component is ", this.request)
            
            // this.emp = [
            //     { id : "01", name : "deepak", age : "24" },
            //     { id : "02", name : "deepica", age : "25" }
            // ]
            this.request.onerror = ( event : any ) => {
                console.error("error")
            }
            this.request.onsuccess = ( event : any ) => {
                this.db = this.request.result
            }
            this.request.onupgradeneeded = ( event : any ) => {
                this.db = event.target.result
                this.imageStore = this.db.createObjectStore("imageStore", { keyPath : "question_id" })
                for ( var i in this.offlineFormData ) {
                    this.imageStore.add(this.offlineFormData[i])
                    console.log(this.offlineFormData)
                }
                // this.textStore = this.db.createObjectStore("textStore", { keyPath : "question_id" })
                // for ( var i in this.offlineFormData ) {
                //     this.imageStore.add(this.offlineFormData[i])
                // }
            }
        } else {
            alert("Local DB not found. Please upgrade to latest browser!")
        }
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(() => {
                if(confirm("New version available. Load New Version?")) { 
                    window.location.reload();
                }
            });
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
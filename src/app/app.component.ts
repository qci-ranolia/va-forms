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
    store : any
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
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(() => {
                if(confirm("New version available. Load New Version?")) { 
                    window.location.reload();
                }
            })
        }
    }

}
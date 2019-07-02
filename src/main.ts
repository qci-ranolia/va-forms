import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import "hammerjs";

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch(err => console.error(err));
platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
  if(navigator.onLine){
    console.log("You are Online")
  }
  else {
    console.error("You are Offline")
  }
  if ('serviceWorker' in navigator && environment.production) {
    navigator.serviceWorker
    .register('/ngsw-worker.js')
    .then(reg => console.log('Service worker registered'))
    .catch(err => console.error(`Service worker: Erro ${err}`))
  }
}).catch(err => console.error(err))
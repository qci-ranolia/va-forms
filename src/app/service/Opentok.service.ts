import { Injectable } from '@angular/core';
import * as OT from '@opentok/client';

@Injectable()
export class OpentokService {

  session: OT.Session;
  token: string;
  API_KEY= '46319802';
  SESSION_ID= '2_MX40NjMxOTgwMn5-MTU1NzI5MzE3NDcwM351QWc0OW81N0JvdG1qYmk3bm52bUREUVF-fg';
  TOKEN= 'T1==cGFydG5lcl9pZD00NjMxOTgwMiZzaWc9NjRmYmU5MzUzZjM0NDc2MDE5ZTM2ZWU0ZTQ1NDNhOTlhZWMwYmQxODppbml0aWFsX2xheW91dF9jbGFzc19saXN0PSZub25jZT0xNDMxNjImZXhwaXJlX3RpbWU9MTU1NzM3OTU3NCZyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTJfTVg0ME5qTXhPVGd3TW41LU1UVTFOekk1TXpFM05EY3dNMzUxUVdjME9XODFOMEp2ZEcxcVltazNibTUyYlVSRVVWRi1mZyZjcmVhdGVfdGltZT0xNTU3MjkzMTc0';
  // TOKEN= 'T1==cGFydG5lcl9pZD00NjMxOTgwMiZzaWc9YzRlY2Y4ZGM0MTAxM2FhZDkxMmVhOTI3MWJmZDM0MGIxNTYxNjA0NDpjcmVhdGVfdGltZT0xNTU3MjkzNjI2JnNlc3Npb25faWQ9Ml9NWDQwTmpNeE9UZ3dNbjUtTVRVMU56STVNekUzTkRjd00zNTFRV2MwT1c4MU4wSnZkRzFxWW1rM2JtNTJiVVJFVVZGLWZnJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9JmV4cGlyZV90aW1lPTE1NTczODAwMjYmcm9sZT1wdWJsaXNoZXImbm9uY2U9NDM0Mjc1';
  constructor() { }

  getOT() {
    return OT;
  }

  initSession() {
    if (this.API_KEY && this.TOKEN && this.SESSION_ID) {
      this.session = this.getOT().initSession(this.API_KEY, this.SESSION_ID);
      this.token = this.TOKEN;
      return Promise.resolve(this.session);
    }
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.session.connect(this.token, (err) => {
        if (err) {
          console.log(err+"")
          reject(err);
        } else {
          console.log(this.session)
          resolve(this.session);
        }
      });
    });
  }

  disconnect() {
    console.log(this.session)

    if(this.session){
      console.log("________________")
      this.session.disconnect();
      this.session = undefined;
      console.log("Disconnected")
      console.log("________________")
    }
  }
}

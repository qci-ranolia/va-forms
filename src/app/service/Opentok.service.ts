import { Injectable } from "@angular/core";
import * as OT from "@opentok/client";

@Injectable()
export class OpentokService {
  session: OT.Session;
  token: string;
  API_KEY = "46319802";
  SESSION_ID =
    "1_MX40NjMxOTgwMn5-MTU1NzMxMTMzNDAzMH5HaVNtU2h2Y2JQOEFVdmVEYTdweFpmQk1-fg";
  TOKEN =
    "T1==cGFydG5lcl9pZD00NjMxOTgwMiZzaWc9YmUxOWIyNjhmZWFkNmQ3NTU0NjM4ZDdjY2U2MTBkYTAxOTRkZmY5Zjpyb2xlPXB1Ymxpc2hlciZub25jZT0xMzczNjkmY3JlYXRlX3RpbWU9MTU1NzMxMTMzNCZleHBpcmVfdGltZT0xNTU3Mzk3NzM0JnNlc3Npb25faWQ9MV9NWDQwTmpNeE9UZ3dNbjUtTVRVMU56TXhNVE16TkRBek1INUhhVk50VTJoMlkySlFPRUZWZG1WRVlUZHdlRnBtUWsxLWZnJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";
  // TOKEN= 'T1==cGFydG5lcl9pZD00NjMxOTgwMiZzaWc9YzRlY2Y4ZGM0MTAxM2FhZDkxMmVhOTI3MWJmZDM0MGIxNTYxNjA0NDpjcmVhdGVfdGltZT0xNTU3MjkzNjI2JnNlc3Npb25faWQ9Ml9NWDQwTmpNeE9UZ3dNbjUtTVRVMU56STVNekUzTkRjd00zNTFRV2MwT1c4MU4wSnZkRzFxWW1rM2JtNTJiVVJFVVZGLWZnJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9JmV4cGlyZV90aW1lPTE1NTczODAwMjYmcm9sZT1wdWJsaXNoZXImbm9uY2U9NDM0Mjc1';
  constructor() {}

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
      this.session.connect(this.token, err => {
        if (err) {
          console.log(err + "");
          reject(err);
        } else {
          console.log(this.session);
          resolve(this.session);
        }
      });
    });
  }

  disconnect() {
    console.log(this.session);

    if (this.session) {
      console.log("________________");
      this.session.disconnect();
      this.session = undefined;
      console.log("Disconnected");
      console.log("________________");
    }
  }
}

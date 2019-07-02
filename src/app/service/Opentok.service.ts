import { Injectable } from "@angular/core";
import * as OT from "@opentok/client";
import { ProjectService } from "./ProjectService";

@Injectable()
export class OpentokService {
  session: OT.Session;
  token: string;
  API_KEY: any = '';
  SESSION_ID: any = '';
  TOKEN: any = '';
  constructor(private projectService: ProjectService) { }

  getOT() {
    return OT;
  }

  initSession() {

    this.API_KEY = this.projectService.openTokCreds.API;
    this.SESSION_ID = this.projectService.openTokCreds.SESSION_ID;
    this.TOKEN = this.projectService.openTokCreds.TOKEN;

    console.log(this.API_KEY+" 1 "+this.SESSION_ID+" 2 "+this.TOKEN)

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

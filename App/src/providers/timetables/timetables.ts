import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { AuthProvider } from "../auth/auth";
import "rxjs/add/operator/map";

/*
  Generated class for the TimetablesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimetablesProvider {
  data: any;

  constructor(public http: Http, public authService: AuthProvider) {
    this.data = null;
  }

  getCourses(){
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://donalburke.me/api/courses/')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getCourseId(email) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Authorization', this.authService.token);

      email = { email: email };

      this.http
        .post("https://donalburke.me/api/auth/course", JSON.stringify(email), {
          headers: headers
        }).map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(data);
        });
    });
  }

  getTimetable(value) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Authorization', this.authService.token);

      value = { _id: value };

      this.http
        .post("https://donalburke.me/api/timetable/", JSON.stringify(value), {
          headers: headers
        }).map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(data);
        });
    });
  }
}

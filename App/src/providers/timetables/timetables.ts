import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { AuthProvider } from "../auth/auth";
import { Storage } from '@ionic/storage';
import "rxjs/add/operator/map";

/*
  Generated class for the TimetablesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimetablesProvider {
  data: any;
  email: any;

  constructor(public http: Http, public authService: AuthProvider, public storage: Storage) {
    this.data = null;
  }

  getCourses() { 
    return new Promise(resolve => {
 
      this.http.get('http://donalburke.me/api/courses/')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  updateModule(day, module, _id) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', this.authService.token);

      module = { 
        _id: _id,
        moduleName: module.moduleName,
        lecturer: module.lecturer,
        room: module.room,
        startTime: module.startTime,
        endTime: module.endTime,
        moduleType: module.moduleType,
        duration: module.duration
      };

      var data = {
        day: day,
        module: module
      }

      console.log(data);
      
      this.http.post('https://donalburke.me/api/courses/updateModule', JSON.stringify(data), {headers: headers})
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
          this.data = res;
          console.log(res);
          return this.data;
        }, (err) => {
          reject(err);
        });
    });
  }

  getTimetable(id) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', this.authService.token);
      
      id = { _id: id };
      
      this.http.post('https://donalburke.me/api/courses/', JSON.stringify(id), {headers: headers})
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
          this.data = res;
          this.storage.set('timetable', this.data);
          console.log(res);
          return this.data;
        }, (err) => {
          reject(err);
        });
 
    });
  }
}

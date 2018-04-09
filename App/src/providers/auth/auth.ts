import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  public token: any;
  constructor(public http: Http, public storage: Storage) {
    console.log('Hello AuthProvider Provider');
  }
  //checks authentication
  checkAuthentication(){
    return new Promise((resolve, reject) => {    
             //Load token if exists
             this.storage.get('token').then((value) => {
      
                 this.token = value;
      
                 let headers = new Headers();
                 headers.append('Authorization', this.token);
      
                 this.http.get('https://donalburke.me/api/auth/protected', {headers: headers})
                     .subscribe(res => {
                         resolve(res);
                     }, (err) => {
                         reject(err);
                     });
      
             });        
         });
  }

  //
}

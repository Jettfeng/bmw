import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Configuration } from '../../../configuration';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient){
  }

  get(id){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/user/get";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
      let params  = {
        'id': id,
      };
      this.http.post(apiURL,params,httpOptions)
        .toPromise()
        .then(
          (res:any) => { // Success
            resolve(res);
          },
          (msg:any) => { // Error
            reject(msg);
          }
        );
    });
    return promise;
  }


  edit(user){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/user/edit";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
      // let params  = {
      //   limit: limit,
      //   offset: offset,
      // };
      this.http.post(apiURL,user,httpOptions)
        .toPromise()
        .then(
          (res:any) => { // Success
            resolve(res);
          },
          (msg:any) => { // Error
            reject(msg);
          }
        );
    });
    return promise;
  }

  ///Extend
  notificationList(dealer_id){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/notification/list";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
      let params  = {
        dealer_id: dealer_id,
      };
      this.http.post(apiURL,params,httpOptions)
        .toPromise()
        .then(
          (res:any) => { // Success
            resolve(res);
          },
          (msg:any) => { // Error
            reject(msg);
          }
        );
    });
    return promise;
  }

  notificationEdit(notification){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/notification/edit";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
      let params  = {
      };
      this.http.post(apiURL,notification,httpOptions)
        .toPromise()
        .then(
          (res:any) => { // Success
            resolve(res);
          },
          (msg:any) => { // Error
            reject(msg);
          }
        );
    });
    return promise;
  }
}

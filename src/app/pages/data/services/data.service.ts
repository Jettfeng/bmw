
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Configuration } from '../../../configuration';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient){
  }

  list(dealer_id,filter,offset,limit){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/data/list";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
      let params  = {
        dealer_id: dealer_id,
        limit: limit,
        offset: offset,
        filter: filter,
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

  //Extend 
  export(dealer_id,filter){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/data/export";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
      let params  = {
        dealer_id: dealer_id,
        filter: filter,
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

  allStation(dealer_id){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/station/all";
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

}

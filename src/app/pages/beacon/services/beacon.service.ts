import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Configuration } from '../../../configuration';

@Injectable({
  providedIn: 'root'
})
export class BeaconService {

  constructor(private http: HttpClient){
  }

  get(id){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/beacon/get";
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

  list(dealer_id,offset,limit){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/beacon/list";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
      let params  = {
        dealer_id: dealer_id,
        limit: limit,
        offset: offset,
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

  create(dealer_id, beacon){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/beacon/create";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
      let params  = {
        dealer_id: dealer_id,
        name: beacon.name,
        uuid: beacon.uuid,
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

  edit(beacon){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/beacon/edit";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };

      this.http.post(apiURL,beacon,httpOptions)
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

  delete(beacon_id){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/beacon/delete";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
      let params  = {
        id: beacon_id,
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

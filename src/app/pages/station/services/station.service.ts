import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Configuration } from '../../../configuration';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http: HttpClient){
  }

  get(id){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/station/get";
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
      let apiURL = Configuration.server_url + "/station/list";
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

  create(dealer_id, station){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/station/create";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
      let params  = {
        dealer_id: dealer_id,
        name: station.name,
        detail: station.detail,
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

  edit(station){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/station/edit";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
      let params  = {
        id: station.id,
        name: station.name,
        detail: station.detail,
        dealer_id: station.dealer_id,
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

  delete(station_id){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/station/delete";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
      let params  = {
        id: station_id,
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


import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Configuration } from '../../../configuration';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient){
  }

  get(id){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/car/get";
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
      let apiURL = Configuration.server_url + "/car/list";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
 
      let params  = {
        dealer_id: dealer_id,
        limit: limit,
        offset: offset,
        direct_sort:"desc",
        title_sort:"car.created_at"
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

  create(car){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/car/create";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
      let params  = {
      };
      this.http.post(apiURL,car,httpOptions)
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

  edit(car){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/car/edit";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
      let params  = {
      };
      this.http.post(apiURL,car,httpOptions)
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

  delete(node_id){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/car/delete";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
      let params  = {
        id: node_id,
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
  deregister(car_id){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/car/deregister";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
      let params  = {
        id: car_id,
        username:localStorage.getItem('userName')
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

  beaconlist(dealer_id,offset,limit){
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
}

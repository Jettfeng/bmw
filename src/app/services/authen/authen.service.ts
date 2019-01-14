import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Configuration } from '../../configuration';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private http: HttpClient){
  }
  
  userLogin(username, password){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/auth/login";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
      let params  = {
        username: username,
        password: password,
      };
      this.http.post(apiURL,params,httpOptions)
        .toPromise()
        .then(
          (res:any) => { // Success
            localStorage.setItem('authToken', res.auth.token);
            resolve(res);
          },
          (msg:any) => { // Error
            reject(msg);
          }
        );
    });
    return promise;
  }

  userGetInfo(){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/auth/get";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
      let params  = {
      };
      this.http.post(apiURL,params,httpOptions)
        .toPromise()
        .then(
          (res:any) => { // Success
            resolve(res);
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
    return promise;
  }
  
  userLogout(){
    let promise = new Promise((resolve, reject) => {
      let apiURL = Configuration.server_url + "/auth/logout";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
      let params  = {
      };
      this.http.post(apiURL,params,httpOptions)
        .toPromise()
        .then(
          (res:any) => { // Success
            this.clear();
            resolve(res);
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
    return promise;
  }

  clear(){
    localStorage.removeItem('userType');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    localStorage.removeItem('authToken');
    localStorage.removeItem('dealerId');
  }

}

import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiRoot:string = 'http://139.59.242.154/ldm/service/public/api/';
  constructor(private http: Http, private cookie: CookieService, private opts:RequestOptions) { 
    let headers = new Headers();
    headers.append('Authorization','Bearer ' + this.cookie.get('token'));
    opts.headers = headers;
  }


   ///# authen
   login(email, password){
    let promise = new Promise((resolve, reject) => {
      let apiURL = this.apiRoot+'auth/login';
      this.http.post(apiURL, {email: email, password: password})
      .toPromise()
      .then(
        (res: Response) => { // Success
        resolve(res.json());
        },
        msg => { // Error
        reject(msg);
        }
      );
    });
    return promise;
  }

  logout(){
    localStorage.removeItem('userType');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
  }

  getUserInfo(token){
    let promise = new Promise((resolve, reject) => {
      let apiURL = this.apiRoot+'auth/get';
      let headers = new Headers();
      headers.append('Authorization','Bearer ' + token);
      this.opts.headers = headers;
      this.http.post(apiURL, {}, this.opts)
      .toPromise()
      .then(
        (res: Response) => { // Success
        resolve(res.json());
        },
        msg => { // Error
        reject(msg);
        }
      );
    });
    return promise;
  }
  
  

}




 

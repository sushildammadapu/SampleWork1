import { Injectable } from '@angular/core';
import {Http,Response,RequestOptions,URLSearchParams,Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class SearchServiceService {
private baseURL:string='https://api.github.com/search/users';
private dataStore: object;
  constructor(private http:Http) 
  { 

  }
  getUSer(name:string):any
  {

   let params=new URLSearchParams();
   let pheaders=new Headers({ 'Content-Type': 'application/json' });
   params.set("q",name);
   let options = new RequestOptions({
            headers: pheaders,
            search: params
        });
  
   options.search=params;
     return this.http.get(this.baseURL,options).map(this.extractData).catch(this.handleError);

  }

  GetUserDetails(userName:string):any
  {

  return  this.http.get(`http://api.github.com/users/${userName}`)
      .map(this.extractData).catch(this.handleError);
  }

 private extractData(res: Response) {
        let body = res.json();
       // console.log(body);
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}

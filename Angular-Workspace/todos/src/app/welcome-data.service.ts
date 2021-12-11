import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HelloWorldBean } from './A-Beans/helloWorldBean';
import { API_URL } from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBean() {
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
  }

  executeHelloWorldBeanWithPathVariable(name: any) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`, 
    // {headers}
    );
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = "zexl";
  //   let password = "tashanicles";
  //   let basicAuthHeaderString = "Basic " + window.btoa(username + ":" + password);
  //   return basicAuthHeaderString;
  // }

}

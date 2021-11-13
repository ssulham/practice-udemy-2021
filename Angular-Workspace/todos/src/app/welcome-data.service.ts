import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelloWorldBean } from './A-Beans/helloWorldBean';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBean() {
    console.log("Executing Hello World Bean...");
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

}

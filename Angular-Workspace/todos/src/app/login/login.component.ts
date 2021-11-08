import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  invalidLogin = false;
  errorMessage = "Invalid Login";

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin() {
    if(this.username === "zexl" && this.password === "TASHANICLES") {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}

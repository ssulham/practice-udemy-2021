import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessage!: string;
  errorMessage!: string;
  name = '';

  constructor(
    private route: ActivatedRoute, 
    private service: WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBean());
    this.service.executeHelloWorldBean().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )
  }

  getPersonalizedWelcomeMessage() {
    this.service.executeHelloWorldBeanWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )
  }

  handleSuccessfulResponse(response: any) {
    this.welcomeMessage = response.message;
    this.errorMessage = "";
  }

  handleErrorResponse(error: any) {
    this.errorMessage = error.error.message;
    this.welcomeMessage = "";
  }

}

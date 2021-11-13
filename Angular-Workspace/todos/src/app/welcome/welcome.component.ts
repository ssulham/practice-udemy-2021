import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessage: string = "";
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
      response => console.log(response.message)
    )
  }

  handleSuccessfulResponse(response: any) {
    console.log(response.message)
  }

}

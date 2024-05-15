import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = 'its-angular-full-power';
  title2 = "its a new project";

  constructor(private router:Router) {

  }

  public actionNavigate(){
    console.log("hello world");
    this.router.navigate(['home'])
  }

  public registrationPage(){
    this.router.navigate(['registration'])
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public imgUrl:string = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
  public modelInput:string;
  public showCard:boolean;

  constructor() {
    this.showCard = false;
    this.modelInput = "";
  }

  public changeImg() {
    this.imgUrl = 'https://techblog.smc.it/static/380cb0f432570dc30e345b10395e0db9/f3583/angular-category-hero.png';
    this.showCard = !this.showCard;
  }

}

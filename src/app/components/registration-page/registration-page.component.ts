import { Component, input } from '@angular/core';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss'
})
export class RegistrationPageComponent {
  nome:string;
  cognome:string;

  constructor(){
    this.nome = "Noman";
    this.cognome = "Sarder";
  }
}

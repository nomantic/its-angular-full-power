import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.scss'
})
export class FormTemplateComponent {
  @Input('paramNome') paramNome:string;
  @Input('paramCognome') paramCognome:string;

  constructor(){
    this.paramNome = "";
    this.paramCognome = "";
  }

}

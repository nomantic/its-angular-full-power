import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-its',
  templateUrl: './card-its.component.html',
  styleUrl: './card-its.component.scss'
})
export class CardItsComponent {
  @Input('imgUrl') imgUrl:string;

  constructor(){
    this.imgUrl = "";

  }

}

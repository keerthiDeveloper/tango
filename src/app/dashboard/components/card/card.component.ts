import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  todayDate: string = Date.now().toString();
  @Input() title!: string;
  @Input() footerShow: boolean = true;
}

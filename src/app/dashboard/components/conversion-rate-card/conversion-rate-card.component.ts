import { Component } from '@angular/core';

@Component({
  selector: 'app-conversion-rate-card',
  templateUrl: './conversion-rate-card.component.html',
  styleUrls: ['./conversion-rate-card.component.css'],
})
export class ConversionRateCardComponent {
  title: string = 'Conversion Rate';
  isEnter = false;
  selectedIndex: Number = 0;

  conversionData: any = [
    {
      id: 1,
      data: [
        { imgUrl: '../../../../assets/icons/square_active.png' },
        { imgUrl: '../../../../assets/icons/square.png' },
      ],
    },
    {
      id: 2,
      data: [
        { imgUrl: '../../../../assets/icons/notes_active.png' },
        { imgUrl: '../../../../assets/icons/notes.png' },
      ],
    },
    {
      id: 3,
      data: [
        { imgUrl: '../../../../assets/icons/Scan_active.png' },
        { imgUrl: '../../../../assets/icons/Scan.png' },
      ],
    },
    {
      id: 3,
      data: [
        { imgUrl: '../../../../assets/icons/money_active.png' },
        { imgUrl: '../../../../assets/icons/money.png' },
      ],
    },
  ];

  imgHover(i: Number, e: boolean) {
    this.selectedIndex = i;
    e ? (this.isEnter = true) : (this.isEnter = false);
  }
}

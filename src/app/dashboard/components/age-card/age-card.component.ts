import { Component } from '@angular/core';

@Component({
  selector: 'app-age-card',
  templateUrl: './age-card.component.html',
  styleUrls: ['./age-card.component.css'],
})
export class AgeCardComponent {
  title: string = 'Age';
  dashBoard: any = [
    { title: 'Total FootFall', data: [] },

    {
      title: 'Conversion Rate',
      data: [{ image: '' }],
    },

    {
      title: 'Age',
      data: [
        {
          type: 'Below-12',
          percentage: '1%',
        },
        {
          type: 'Age 13 - 19',
          percentage: '0%',
        },
        {
          type: 'Age 20 - 30',
          percentage: '44%',
        },
        {
          type: 'Age 31 - 45',
          percentage: '41%',
        },
        {
          type: 'Age 46 -59',
          percentage: '9%',
        },
        {
          type: 'Above 60',
          percentage: '5%',
        },
      ],
    },
    { title: 'Gender & Dwell Time', data: [] },
  ];
}

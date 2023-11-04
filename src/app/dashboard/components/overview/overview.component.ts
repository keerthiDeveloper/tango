import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent {
  todayDate: string = Date.now().toString();
  title: string = 'Overview';
  selectIndex: Number = 0;
  storesSelectIndex: Number = 0;

  storesTabData: any = [
    { title: 'Top 10 Stores' },
    { title: 'Bottom 10 Stores' },
  ];

  overviewSubModel: any = [
    {
      imgUrl: '../../../../assets/icons/Football.png',
      title: 'Footfall & Conversion',
    },
    {
      imgUrl: '../../../../assets/icons/Gender_male.png',
      title: 'Demographic',
    },
    {
      imgUrl: '../../../../assets/icons/dwell.png',
      title: 'Dwell Time',
    },
  ];
  // chart Option Data
  chartOptions: any = {
    animationEnabled: true,
    theme: 'light2',

    axisY: {
      title: 'Football',
      includeZero: true,
    },
    axisY2: {
      title: 'Conversion Rate ( % )',
      includeZero: true,
      labelFormatter: (e: any) => {
        // var suffixes = ['', 'K', 'M', 'B'];

        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(100)), 0);
        // if (order > suffixes.length - 1) order = suffixes.length - 1;
        console.log(order, e.value);

        return e.value / Math.pow(100, order);
      },
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: 'pointer',
      itemclick: function (e: any) {
        if (
          typeof e.dataSeries.visible === 'undefined' ||
          e.dataSeries.visible
        ) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      },
    },
    data: [
      {
        type: 'column',
        color: '#25a0fc',
        showInLegend: true,
        name: 'Football',
        axisYType: 'secondary',
        yValueFormatString: '#,###',
        dataPoints: [
          { label: 'Jan', y: 250000 },
          { label: 'Feb', y: 431000 },
          { label: 'Mar', y: 646000 },
          { label: 'Apr', y: 522000 },
          { label: 'May', y: 464000 },
          { label: 'Jun', y: 470000 },
          { label: 'Jul', y: 534000 },
          { label: 'Aug', y: 407000 },
          { label: 'Sep', y: 484000 },
          { label: 'Oct', y: 465000 },
          { label: 'Nov', y: 424000 },
          { label: 'Dec', y: 231000 },
        ],
      },
      {
        type: 'spline',
        showInLegend: true,
        name: 'Conversion Rate',
        dataPoints: [
          { label: 'Jan', y: 372 },
          { label: 'Feb', y: 412 },
          { label: 'Mar', y: 572 },
          { label: 'Apr', y: 224 },
          { label: 'May', y: 246 },
          { label: 'Jun', y: 601 },
          { label: 'Jul', y: 642 },
          { label: 'Aug', y: 590 },
          { label: 'Sep', y: 527 },
          { label: 'Oct', y: 273 },
          { label: 'Nov', y: 251 },
          { label: 'Dec', y: 331 },
        ],
      },
    ],
  };

  onSubModuleTab(i: Number) {
    this.selectIndex = i;
  }

  selectStoreTab(i: Number) {
    this.storesSelectIndex = i;
  }
}

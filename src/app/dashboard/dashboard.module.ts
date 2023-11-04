import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CardComponent } from './components/card/card.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FootballCardComponent } from './components/football-card/football-card.component';
import { ConversionRateCardComponent } from './components/conversion-rate-card/conversion-rate-card.component';
import { AgeCardComponent } from './components/age-card/age-card.component';
import { GenderAndDwellCardComponent } from './components/gender-and-dwell-card/gender-and-dwell-card.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SummaryTableComponent } from './components/summary-table/summary-table.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent,
    FootballCardComponent,
    ConversionRateCardComponent,
    AgeCardComponent,
    GenderAndDwellCardComponent,
    OverviewComponent,
    SummaryTableComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    CanvasJSAngularChartsModule,
    NgbModule,
  ],
})
export class DashboardModule {}

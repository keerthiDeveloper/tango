import { Component, QueryList, ViewChildren } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Observable } from 'rxjs';
import { Store } from '../class/store';
import { SortEvent, SortableDirective } from '../directives/sortable.directive';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [StoreService, DecimalPipe],
})
export class DashboardComponent {}

import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from 'src/app/class/store';
import {
  SortEvent,
  SortableDirective,
} from 'src/app/directives/sortable.directive';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-summary-table',
  templateUrl: './summary-table.component.html',
  styleUrls: ['./summary-table.component.css'],
})
export class SummaryTableComponent {
  todayDate: string = Date.now().toString();
  title: string = 'Summary Table';
  isFooterShow: boolean = false;
  stores$: Observable<Store[]>;
  total$: Observable<number>;

  @ViewChildren(SortableDirective) headers!: QueryList<SortableDirective>;

  constructor(public service: StoreService) {
    this.stores$ = service.stores$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    debugger;
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}

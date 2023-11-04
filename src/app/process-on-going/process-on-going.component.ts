import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-process-on-going',
  templateUrl: './process-on-going.component.html',
  styleUrls: ['./process-on-going.component.css'],
})
export class ProcessOnGoingComponent {
  constructor(private router: Location) {}

  // Back to Home
  backHome() {
    this.router.back();
  }
}

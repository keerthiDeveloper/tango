import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFountComponent } from './not-fount/not-fount.component';
import { ProcessOnGoingComponent } from './process-on-going/process-on-going.component';

@NgModule({
  declarations: [AppComponent, NotFountComponent, ProcessOnGoingComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

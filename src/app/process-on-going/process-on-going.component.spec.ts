import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessOnGoingComponent } from './process-on-going.component';

describe('ProcessOnGoingComponent', () => {
  let component: ProcessOnGoingComponent;
  let fixture: ComponentFixture<ProcessOnGoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessOnGoingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessOnGoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

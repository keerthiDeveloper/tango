import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderAndDwellCardComponent } from './gender-and-dwell-card.component';

describe('GenderAndDwellCardComponent', () => {
  let component: GenderAndDwellCardComponent;
  let fixture: ComponentFixture<GenderAndDwellCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderAndDwellCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenderAndDwellCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

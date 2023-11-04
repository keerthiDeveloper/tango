import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionRateCardComponent } from './conversion-rate-card.component';

describe('ConversionRateCardComponent', () => {
  let component: ConversionRateCardComponent;
  let fixture: ComponentFixture<ConversionRateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionRateCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversionRateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

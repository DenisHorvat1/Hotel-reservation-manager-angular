import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelInRangeComponent } from './hotel-in-range.component';

describe('HotelInRangeComponent', () => {
  let component: HotelInRangeComponent;
  let fixture: ComponentFixture<HotelInRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotelInRangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelInRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

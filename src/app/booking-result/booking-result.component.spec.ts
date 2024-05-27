import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingResultComponent } from './booking-result.component';

describe('BookingResultComponent', () => {
  let component: BookingResultComponent;
  let fixture: ComponentFixture<BookingResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSearchFlightComponent } from './get-search-flight.component';

describe('GetSearchFlightComponent', () => {
  let component: GetSearchFlightComponent;
  let fixture: ComponentFixture<GetSearchFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSearchFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSearchFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

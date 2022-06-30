import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoutCoupenComponent } from './discout-coupen.component';

describe('DiscoutCoupenComponent', () => {
  let component: DiscoutCoupenComponent;
  let fixture: ComponentFixture<DiscoutCoupenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoutCoupenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoutCoupenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

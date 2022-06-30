import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFLightComponent } from './edit-flight.component';

describe('EditFLightComponent', () => {
  let component: EditFLightComponent;
  let fixture: ComponentFixture<EditFLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

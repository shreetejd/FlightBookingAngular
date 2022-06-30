import { TestBed } from '@angular/core/testing';

import { FlightRegisterServicesService } from './flight-register-services.service';

describe('FlightRegisterServicesService', () => {
  let service: FlightRegisterServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightRegisterServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

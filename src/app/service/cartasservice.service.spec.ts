import { TestBed } from '@angular/core/testing';

import { CartasserviceService } from './cartasservice.service';

describe('CartasserviceService', () => {
  let service: CartasserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartasserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

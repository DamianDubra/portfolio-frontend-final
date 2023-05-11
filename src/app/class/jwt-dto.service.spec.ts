import { TestBed } from '@angular/core/testing';

import { JwtDtoService } from './jwt-dto.service';

describe('JwtDtoService', () => {
  let service: JwtDtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtDtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

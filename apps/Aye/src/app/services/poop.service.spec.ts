import { TestBed } from '@angular/core/testing';

import { PoopService } from './poop.service';

describe('PoopService', () => {
  let service: PoopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

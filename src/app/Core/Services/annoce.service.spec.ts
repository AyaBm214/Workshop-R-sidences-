import { TestBed } from '@angular/core/testing';

import { AnnoceService } from './annoce.service';

describe('AnnoceService', () => {
  let service: AnnoceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnoceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

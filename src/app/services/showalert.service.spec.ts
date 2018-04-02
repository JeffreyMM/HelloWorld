import { TestBed, inject } from '@angular/core/testing';

import { ShowalertService } from './showalert.service';

describe('ShowalertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowalertService]
    });
  });

  it('should be created', inject([ShowalertService], (service: ShowalertService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ReposServiceService } from './repos-service.service';

describe('ReposServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReposServiceService]
    });
  });

  it('should be created', inject([ReposServiceService], (service: ReposServiceService) => {
    expect(service).toBeTruthy();
  }));
});

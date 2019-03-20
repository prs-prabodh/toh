import { TestBed } from '@angular/core/testing';

import { HeroFetchService } from './hero-fetch.service';

describe('HeroFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroFetchService = TestBed.get(HeroFetchService);
    expect(service).toBeTruthy();
  });
});

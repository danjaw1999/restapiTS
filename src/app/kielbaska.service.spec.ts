import { TestBed } from '@angular/core/testing';

import { KielbaskaService } from './kielbaska.service';

describe('KielbaskaService', () => {
  let service: KielbaskaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KielbaskaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

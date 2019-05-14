import { TestBed } from '@angular/core/testing';

import { CargafotoService } from './cargafoto.service';

describe('CargafotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CargafotoService = TestBed.get(CargafotoService);
    expect(service).toBeTruthy();
  });
});

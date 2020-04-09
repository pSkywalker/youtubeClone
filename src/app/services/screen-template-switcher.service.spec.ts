import { TestBed } from '@angular/core/testing';

import { ScreenTemplateSwitcherService } from './screen-template-switcher.service';

describe('ScreenTemplateSwitcherService', () => {
  let service: ScreenTemplateSwitcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenTemplateSwitcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

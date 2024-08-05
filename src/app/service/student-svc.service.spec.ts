import { TestBed } from '@angular/core/testing';

import { StudentSvcService } from './student-svc.service';

describe('StudentSvcService', () => {
  let service: StudentSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsInfosComponent } from './students-infos.component';

describe('StudentsInfosComponent', () => {
  let component: StudentsInfosComponent;
  let fixture: ComponentFixture<StudentsInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentsInfosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

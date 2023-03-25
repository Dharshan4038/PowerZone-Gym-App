import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseResultComponent } from './exercise-result.component';

describe('ExerciseResultComponent', () => {
  let component: ExerciseResultComponent;
  let fixture: ComponentFixture<ExerciseResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

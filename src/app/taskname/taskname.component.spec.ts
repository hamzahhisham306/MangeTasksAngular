import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasknameComponent } from './taskname.component';

describe('TasknameComponent', () => {
  let component: TasknameComponent;
  let fixture: ComponentFixture<TasknameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasknameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasknameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

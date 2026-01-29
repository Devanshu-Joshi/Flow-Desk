import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTableRow } from './task-table-row';

describe('TaskTableRow', () => {
  let component: TaskTableRow;
  let fixture: ComponentFixture<TaskTableRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskTableRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskTableRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

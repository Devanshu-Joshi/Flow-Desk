import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedPagination } from './shared-pagination';

describe('SharedPagination', () => {
  let component: SharedPagination;
  let fixture: ComponentFixture<SharedPagination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedPagination]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedPagination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

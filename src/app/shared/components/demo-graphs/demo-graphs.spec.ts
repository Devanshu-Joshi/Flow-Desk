import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoGraphs } from './demo-graphs';

describe('DemoGraphs', () => {
  let component: DemoGraphs;
  let fixture: ComponentFixture<DemoGraphs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoGraphs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoGraphs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

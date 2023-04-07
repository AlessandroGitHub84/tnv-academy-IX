import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDashComponent } from './daily-dash.component';

describe('DailyDashComponent', () => {
  let component: DailyDashComponent;
  let fixture: ComponentFixture<DailyDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

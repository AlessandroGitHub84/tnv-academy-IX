import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValNutrComponent } from './val-nutr.component';

describe('ValNutrComponent', () => {
  let component: ValNutrComponent;
  let fixture: ComponentFixture<ValNutrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValNutrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValNutrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

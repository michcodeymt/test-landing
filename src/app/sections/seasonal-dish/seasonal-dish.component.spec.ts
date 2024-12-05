import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalDishComponent } from './seasonal-dish.component';

describe('SeasonalDishComponent', () => {
  let component: SeasonalDishComponent;
  let fixture: ComponentFixture<SeasonalDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonalDishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonalDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

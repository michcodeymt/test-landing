import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueExperienceComponent } from './unique-experience.component';

describe('UniqueExperienceComponent', () => {
  let component: UniqueExperienceComponent;
  let fixture: ComponentFixture<UniqueExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniqueExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniqueExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

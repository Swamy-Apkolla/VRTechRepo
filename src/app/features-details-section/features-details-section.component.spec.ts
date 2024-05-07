import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesDetailsSectionComponent } from './features-details-section.component';

describe('FeaturesDetailsSectionComponent', () => {
  let component: FeaturesDetailsSectionComponent;
  let fixture: ComponentFixture<FeaturesDetailsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturesDetailsSectionComponent]
    });
    fixture = TestBed.createComponent(FeaturesDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

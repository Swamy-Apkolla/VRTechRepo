import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopMacbookRepairComponent } from './laptop-macbook-repair.component';

describe('LaptopMacbookRepairComponent', () => {
  let component: LaptopMacbookRepairComponent;
  let fixture: ComponentFixture<LaptopMacbookRepairComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaptopMacbookRepairComponent]
    });
    fixture = TestBed.createComponent(LaptopMacbookRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

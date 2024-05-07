import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerRepairsComponent } from './computer-repairs.component';

describe('ComputerRepairsComponent', () => {
  let component: ComputerRepairsComponent;
  let fixture: ComponentFixture<ComputerRepairsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComputerRepairsComponent]
    });
    fixture = TestBed.createComponent(ComputerRepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

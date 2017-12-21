import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacilometerComponent } from './vacilometer.component';

describe('VacilometerComponent', () => {
  let component: VacilometerComponent;
  let fixture: ComponentFixture<VacilometerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacilometerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacilometerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

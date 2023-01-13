import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAcercaMiComponent } from './dashboard-acerca-mi.component';

describe('DashboardAcercaMiComponent', () => {
  let component: DashboardAcercaMiComponent;
  let fixture: ComponentFixture<DashboardAcercaMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAcercaMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAcercaMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

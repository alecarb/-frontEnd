import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaMiNewComponent } from './acerca-mi-new.component';

describe('AcercaMiNewComponent', () => {
  let component: AcercaMiNewComponent;
  let fixture: ComponentFixture<AcercaMiNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaMiNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaMiNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

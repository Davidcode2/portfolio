import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VRShooterComponent } from './vr-shooter.component';

describe('VRShooterComponent', () => {
  let component: VRShooterComponent;
  let fixture: ComponentFixture<VRShooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VRShooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VRShooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

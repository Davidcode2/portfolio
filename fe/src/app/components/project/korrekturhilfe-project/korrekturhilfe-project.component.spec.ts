import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorrekturhilfeProjectComponent } from './korrekturhilfe-project.component';

describe('KorrekturhilfeProjectComponent', () => {
  let component: KorrekturhilfeProjectComponent;
  let fixture: ComponentFixture<KorrekturhilfeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KorrekturhilfeProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KorrekturhilfeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

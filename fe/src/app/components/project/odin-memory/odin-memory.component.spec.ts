import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdinMemoryComponent } from './odin-memory.component';

describe('OdinMemoryComponent', () => {
  let component: OdinMemoryComponent;
  let fixture: ComponentFixture<OdinMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OdinMemoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OdinMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

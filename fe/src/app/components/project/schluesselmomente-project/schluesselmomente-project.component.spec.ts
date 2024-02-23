import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchluesselmomenteProjectComponent } from './schluesselmomente-project.component';

describe('SchluesselmomenteProjectComponent', () => {
  let component: SchluesselmomenteProjectComponent;
  let fixture: ComponentFixture<SchluesselmomenteProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchluesselmomenteProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchluesselmomenteProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

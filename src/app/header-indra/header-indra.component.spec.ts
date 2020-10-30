import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIndraComponent } from './header-indra.component';

describe('HeaderIndraComponent', () => {
  let component: HeaderIndraComponent;
  let fixture: ComponentFixture<HeaderIndraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderIndraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderIndraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

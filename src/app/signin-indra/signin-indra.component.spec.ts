import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninIndraComponent } from './signin-indra.component';

describe('SigninIndraComponent', () => {
  let component: SigninIndraComponent;
  let fixture: ComponentFixture<SigninIndraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninIndraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninIndraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSingupComponent } from './login-singup.component';

describe('LoginSignupComponent', () => {
  let component: LoginSingupComponent;
  let fixture: ComponentFixture<LoginSingupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSingupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

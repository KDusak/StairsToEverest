import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPageControllerComponent } from './sing-up-page-controller.component';

describe('SingUpPageControllerComponent', () => {
  let component: SignUpPageControllerComponent;
  let fixture: ComponentFixture<SignUpPageControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpPageControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPageControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

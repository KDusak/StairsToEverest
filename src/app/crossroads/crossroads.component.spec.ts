import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossroadsComponent } from './crossroads-controller.component';

describe('CrossroadsControllerComponent', () => {
  let component: CrossroadsComponent;
  let fixture: ComponentFixture<CrossroadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossroadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossroadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

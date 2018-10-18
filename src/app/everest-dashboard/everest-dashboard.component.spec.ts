import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EverestDashboardComponent } from './everest-dashboard-controller.component';

describe('EverestDashboardControllerComponent', () => {
  let component: EverestDashboardComponent;
  let fixture: ComponentFixture<EverestDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EverestDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EverestDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

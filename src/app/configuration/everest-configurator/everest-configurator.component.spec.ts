import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EverestConfiguratorComponent } from './everest-configurator-controller.component';

describe('EverestConfiguratorControllerComponent', () => {
  let component: EverestConfiguratorComponent;
  let fixture: ComponentFixture<EverestConfiguratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EverestConfiguratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EverestConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

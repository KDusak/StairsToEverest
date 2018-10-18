import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EverestFormComponent } from './everest-form.component';

describe('EverestFormComponent', () => {
  let component: EverestFormComponent;
  let fixture: ComponentFixture<EverestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EverestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EverestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

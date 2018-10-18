import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EverestListComponent } from './everest-list-controller.component';

describe('EverestListControllerComponent', () => {
  let component: EverestListComponent;
  let fixture: ComponentFixture<EverestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EverestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EverestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

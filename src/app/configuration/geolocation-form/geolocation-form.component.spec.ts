import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocationFormComponent } from './geolocation-form.component';

describe('GeolocationFormComponent', () => {
  let component: GeolocationFormComponent;
  let fixture: ComponentFixture<GeolocationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

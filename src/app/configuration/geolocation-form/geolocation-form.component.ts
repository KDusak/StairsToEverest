import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-geolocation-form',
  templateUrl: './geolocation-form.component.html',
  styleUrls: ['./geolocation-form.component.css']
})
export class GeolocationFormComponent implements OnInit {

  @Input() public geolocationFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.geolocationFormGroup.addControl('complexName', this.formBuilder.control('bujaka'));
    this.geolocationFormGroup.addControl('street', new FormControl(''));
    this.geolocationFormGroup.addControl('city', new FormControl(''));
    this.geolocationFormGroup.addControl('zip', new FormControl(''));
    this.geolocationFormGroup.addControl('countryCode', new FormControl(''));
  }
}

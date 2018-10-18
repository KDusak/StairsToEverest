import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EverestAddress, EverestService} from '../../everest.service';

@Component({
  selector: 'app-everest-form',
  templateUrl: './everest-form.component.html',
  styleUrls: ['./everest-form.component.css']
})
export class EverestFormComponent implements OnInit {

  public createForm: FormGroup;

  public showNextStep = false;

  constructor(private formBuilder: FormBuilder,
              private everestService: EverestService) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      everestName: [''],
      address: this.formBuilder.group({}),
    });

    this.createForm.valueChanges.subscribe((change) => {
      console.log(`Form has changed : ${change}`);
    });

  }

  checkEverestName() {
    this.showNextStep = true;
    // const name = this.createForm.controls['everestName'].value;
    // this.everestService.checkEverestName(name).subscribe((message) => {
    //   this.showNextStep = true;
    // }, (error) => {
    //   console.log(`Problem with Everest name. Uniqueness test failed : ${error}`);
    // });
  }

  public submitForm() {
    console.log(`current value of form : ${JSON.stringify(this.createForm.value)}`);
  }
}

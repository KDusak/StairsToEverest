import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User, UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  public newUserForm: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.newUserForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  public submitForm() {
    if (this.newUserForm.valid) {
      this.userService.createNewUser(this.newUserForm.value).subscribe((user: User) => {
        console.log('logged user is : ', user);
      }, (err) => {
        console.log('New user creation failed.', err);
      });
    }
  }

  private redirectToLogin() {
    this.router.navigate(['']);
  }

}

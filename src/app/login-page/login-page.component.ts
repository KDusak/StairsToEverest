import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User, UserService} from '../user.service';
import {Router} from '@angular/router';
import {MessageResponse} from '../everest.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public loginForm: FormGroup;

  private user: User;

  public serverResponse = '';

  private tenMinutes = 1000 * 60 * 10;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    const authenticationTime = sessionStorage.getItem('authentication');
    if (authenticationTime) {
      if (Date.now() > (Number.parseInt(authenticationTime) + this.tenMinutes)) {
        this.redirectToDashboard();
      }
      sessionStorage.removeItem('authentication');
    }
  }

  public submitForm() {
    if (this.loginForm.valid) {
      this.userService.loginUser(this.loginForm.value).subscribe((user: User) => {
        sessionStorage.setItem('authentication', Date.now().toString(10));
        sessionStorage.setItem('user', JSON.stringify(user));
        this.redirectToDashboard();
      }, (response) => {
        this.serverResponse = response.error.message;
      });
    }
  }

  private redirectToDashboard() {
    if (sessionStorage.getItem('user') !== '') {
      this.router.navigate(['crossroads']);
    }
  }
}

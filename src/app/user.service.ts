import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public createNewUser(data: CreateNewUser): Observable<User> {
    return this.http.post<User>('http://' + window.location.host + '/api/user/create', data);
  }

  public loginUser(data: LoginUser): Observable<User> {
    return this.http.post<User>('http://' + window.location.host + '/api/user/login', data);
  }
}

export class User {
  username: string;
  email: string;
  everestId: string;
}

export class CreateNewUser {
  username: string;
  email: string;
  password: string;
}

export class LoginUser {
  username: string;
  password: string;
}

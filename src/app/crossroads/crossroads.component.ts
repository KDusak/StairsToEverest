import { Component, OnInit } from '@angular/core';
import {User} from '../user.service';

@Component({
  selector: 'app-crossroads',
  templateUrl: './crossroads.component.html',
  styleUrls: ['./crossroads.component.css']
})
export class CrossroadsComponent implements OnInit {

  public user: User;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

}

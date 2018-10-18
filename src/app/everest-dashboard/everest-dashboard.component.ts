import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-everest-dashboard-controller',
  templateUrl: './everest-dashboard.component.html',
  styleUrls: ['./everest-dashboard.component.css']
})
export class EverestDashboardComponent implements OnInit {

  public message = 'just hello world !!!';

  public everestName: number;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.everestName = Number.parseInt(params['everestName']);
    });
  }

  ngOnInit() {
    this.message = `Welcome to everest ${this.everestName}`;
  }

}

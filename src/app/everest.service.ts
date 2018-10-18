import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {s} from '@angular/core/src/render3';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EverestService {

  constructor(private http: HttpClient) { }

  public createEverest(everest: Everest): Observable<MessageResponse> {
    // PUT Method
    return null;
  }

  public updateEverest(everest: Everest): Observable<MessageResponse> {
    // POST Method
    return null;
  }

  public checkEverestName(name: string): Observable<MessageResponse> {
    return this.http.post<MessageResponse>('/everest/check-name-uniqueness', {name: name});
  }
}

/**
 * Simple message response to the CRUD actions
 */
export class MessageResponse {
  message: string;
  errorCode: number;
}

/**
 * Represent One Everest.
 * Everest should has more then one building. It should be building complex.
 */
export class Everest {
  everestName: string;
  address: EverestAddress;
  building: EverestBuilding;
}


/**
 * Location of Everest
 */
export class EverestAddress {
  complexName: string;
  street: string;
  city: string;
  zip: string;
  countryCode: string;
}

/**
 * Represent building. Every building has some unique name and should have one or more stairs.
 */
export class EverestBuilding {
  name: string;
  staircases: Staircases;
}

/**
 * Represent one stairs in building. Like stairs in "Tower B"
 */
export class Staircase {
  name: string;
  floors: Floors;
  topLevel: number; // number of top floor
  bottomLevel: number; // number of bottom floor
}

declare type Staircases = Staircase[];

/**
 * Represent one floor in stairs and number of stairs needed to upper floor.
 */
export class Stairs {
  floorNumber: number; // from what floor
  steps: number; // number of steps to upper floor (floorNumber + 1). If 0 , than it's last floor.
  totalHeight: number; // total height of stairs in centimeters (cm)
}

declare type Floors = Stairs[];

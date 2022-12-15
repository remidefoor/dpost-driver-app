import { Injectable } from '@angular/core';
import { Person } from '../models/interfaces/person.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly user: Person;

  constructor() {
    this.user = this.getUser();
  }

  private getUser(): Person {
    return {
      marsId: 'ako-18',
      address: {
        address: '',
        longitude: 3.26,
        latitude: 50.82
      },
      walletAddress: ''
    };
  }

}

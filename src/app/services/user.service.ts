import { Injectable } from '@angular/core';
import { UserInterface } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly user: UserInterface;

  constructor() {
    this.user = this.getUser();
  }

  private getUser(): UserInterface {
    return {
      id: 'ako-18'
    };
  }

}

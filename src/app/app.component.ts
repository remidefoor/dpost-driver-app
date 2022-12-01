import { Component } from '@angular/core';
import { Person } from './models/interfaces/person.interface';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: Person;

  constructor(private readonly userService: UserService) {
    this.user = userService.user;
  }

}

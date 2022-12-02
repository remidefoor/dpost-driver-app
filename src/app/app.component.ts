import { Component } from '@angular/core';
import { Person } from './models/interfaces/person.interface';
import { UserService } from './services/user.service';
import {NotificationsService} from './services/notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: Person;

  constructor(private readonly userService: UserService, private readonly notificationsService: NotificationsService) {
    this.user = userService.user;
    this.notificationsService.register();
  }

}

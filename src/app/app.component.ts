import { Component } from '@angular/core';
import { User } from './components/user/user';
import { UserService } from './components/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userService: UserService;
  user: User;

  constructor() {
    this.userService = new UserService();
    this.user = this.userService.user;
  }

}

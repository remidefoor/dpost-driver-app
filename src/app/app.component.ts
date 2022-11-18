import { Component } from '@angular/core';
import { UserInterface } from './models/user.interface';
import { UserService } from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: UserInterface;

  constructor(private readonly userService: UserService) {
    this.user = userService.user;
  }

}

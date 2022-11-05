import { Component, OnInit } from '@angular/core';
import { NotificationsService } from "./notifications.service";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications: string[];

  constructor() {
    this.notifications = new NotificationsService().notifications;
  }

  ngOnInit(): void {
  }

}

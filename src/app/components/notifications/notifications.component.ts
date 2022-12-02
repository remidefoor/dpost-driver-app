import { Component, OnInit } from '@angular/core';
import {Delivery} from '../../models/interfaces/delivery.interface';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit{

  notifications: string[];

  notificationList: Delivery[];

  constructor(private readonly notificationsService: NotificationsService) {
    this.notifications = notificationsService.notifications;

    this.notificationList = [];
  }

  ngOnInit() {
    this.notificationsService.getNotification().subscribe((notification: Delivery) => {
      console.log(notification);
      this.notificationList.push(notification);
    });
  }

  deleteNotifications(): void {
    this.notifications.splice(0, this.notifications.length);
  }

  deleteNotification(i: number): void {
    this.notifications.splice(i, 1);
  }

}

import { Component, OnInit } from '@angular/core';
import {Delivery} from '../../models/interfaces/delivery.interface';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit{

  notifications: Delivery[];

  constructor(private readonly notificationsService: NotificationsService) {
    this.notifications = [];
  }

  ngOnInit() {
    this.notificationsService.getNotification().subscribe((notification: Delivery) => {
      this.notifications.push(notification);
    });
  }

  deleteNotifications(): void {
    this.notifications.splice(0, this.notifications.length);
  }

  deleteNotification(i: number): void {
    this.notifications.splice(i, 1);
  }

}

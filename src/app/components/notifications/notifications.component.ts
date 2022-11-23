import { Component } from '@angular/core';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {

  notifications: string[];

  constructor(private readonly notificationService: NotificationsService) {
    this.notifications = notificationService.notifications;
  }

  deleteNotifications(): void {
    this.notifications.splice(0, this.notifications.length);
  }

  deleteNotification(i: number): void {
    this.notifications.splice(i, 1);
  }

}

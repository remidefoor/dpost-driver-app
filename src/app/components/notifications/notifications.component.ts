import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit{

  notifications: string[];

  notificationList: any[];

  constructor(private readonly notificationService: NotificationsService) {
    this.notifications = notificationService.notifications;

    this.notificationList = [];
  }

  ngOnInit() {
    console.log('register');
    this.notificationService.register();
    this.notificationService.getNotification().subscribe((notification: any) => {
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

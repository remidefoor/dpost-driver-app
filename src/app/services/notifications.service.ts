import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  notifications: string[];

  constructor() {
    this.notifications = [];
    this.listenForNotifications();
  }

  private listenForNotifications(): void {
    this.notifications.push('Pickup has been approved!');
    this.notifications.push('You\'ve been paid $ 6.25!')
  }

}

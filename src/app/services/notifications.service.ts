import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  socket: Socket;

  notifications: string[];

  notification: BehaviorSubject<any>;

  constructor() {
    this.socket = io('https://state-notifier.dpost.online/');

    this.notifications = [];
    this.listenForNotifications();

    this.notification = new BehaviorSubject('');
  }

  private listenForNotifications(): void {
    this.notifications.push('Pickup has been approved!');
    this.notifications.push('You\'ve been paid $ 6.25!');
  }

  register(): void {
    this.socket.emit('hello', { clientId: 'ako-18' });
  }

  getNotification = (): Observable<any> => {
    this.socket.on('stateChange', (notification: any) => {
      this.notification.next(notification);
    });
    return this.notification.asObservable();
  };

}

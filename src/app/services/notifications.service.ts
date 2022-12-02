import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { io, Socket } from 'socket.io-client';
import {UserService} from './user.service';
import {Delivery} from '../models/interfaces/delivery.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  socket: Socket;

  notifications: string[];

  notification: Subject<Delivery>;

  constructor(private readonly userService: UserService) {
    this.socket = io('https://state-notifier.dpost.online/');

    this.notifications = [];
    this.listenForNotifications();

    this.notification = new Subject();
  }

  private listenForNotifications(): void {
    this.notifications.push('Pickup has been approved!');
    this.notifications.push('You\'ve been paid $ 6.25!');
  }

  register(): void {
    this.socket.emit('hello', { clientId: this.userService.user.marsId });
  }

  getNotification = (): Observable<Delivery> => {
    this.socket.on('stateChange', (notification: Delivery) => {
      this.notification.next(notification);
    });
    return this.notification.asObservable();
  };

}

import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { io, Socket } from 'socket.io-client';
import {environment} from '../../environments/environment.prod';
import {UserService} from './user.service';
import {Delivery} from '../models/interfaces/delivery.interface';

// https://medium.com/@deguzmanbrianfrancis/setting-up-and-creating-a-chat-app-with-angular-socket-io-3-0-and-express-70c69b8031f6

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  URL: string;
  REGISTER_EVT: string;
  STATE_CHANGE_EVT: string;

  socket: Socket;
  notifications: Subject<Delivery>;

  constructor(private readonly userService: UserService) {
    this.URL = environment.stateNotifierUrl || 'https://state-notifier.dpost.online/';
    this.REGISTER_EVT = 'hello';
    this.STATE_CHANGE_EVT = 'stateChange';

    this.socket = io(this.URL);
    this.notifications = new Subject();
  }

  register(): void {
    this.socket.emit(this.REGISTER_EVT, { clientId: this.userService.user.marsId });
  }

  getNotification = (): Observable<Delivery> => {
    this.socket.on(this.STATE_CHANGE_EVT, (notification: Delivery) => {
      this.notifications.next(notification);
    });
    return this.notifications.asObservable();
  };

}

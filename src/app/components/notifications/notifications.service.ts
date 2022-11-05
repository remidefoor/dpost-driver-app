export class NotificationsService {

  notifications: string[];

  constructor() {
    this.notifications = this.#fetchNotifications();
  }

  #fetchNotifications(): string[] {
    return [
      'Pickup has been approved!',
      "You've been paid $ 6.25!"
    ];
  }

}

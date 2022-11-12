import { User } from './user';

export class UserService {

  readonly user: User;

  constructor() {
    this.user = new User(this.getUserId());
  }

  private getUserId(): string {
    return 'ako-18';
  }

}

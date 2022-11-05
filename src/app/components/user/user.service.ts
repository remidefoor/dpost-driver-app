import { User } from "./user";

export class UserService {

  user: User;

  constructor() {
    this.user = new User(this.#getUserId());
  }

  #getUserId(): string {
    return 'ako-18';
  }

}

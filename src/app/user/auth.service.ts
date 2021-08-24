import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser!: IUser;

  loginUser(userName: string, password: string): void {
    // temporary
    this.currentUser = {
      id: 1,
      userName,
      firstName: 'John',
      lastName: 'Papa',
    };
  }

  isAuthenticated(): boolean {
    return Boolean(this.currentUser);
  }
}

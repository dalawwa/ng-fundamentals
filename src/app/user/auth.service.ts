import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  updateUser(formValue: NgForm['value']) {
    this.currentUser = {
      ...this.currentUser,
      ...formValue,
    };
  }
}

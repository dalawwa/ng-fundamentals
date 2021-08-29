import { Injectable } from '@angular/core';
import { ISession } from '../shared';

@Injectable()
export class SessionService {
  saveSession(session: ISession) {
    console.log(session);
  }
}

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { EventService, IEvent } from './shared';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}

  // used in routes to start loading the component only after this resolve function finishes
  resolve(): Observable<IEvent[]> {
    return this.eventService.getEvents().pipe(map((events) => events));
  }
}

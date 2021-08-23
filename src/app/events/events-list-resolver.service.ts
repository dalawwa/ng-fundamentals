import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';

import { EventService } from './shared/event.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}

  // used in routes to start loading the component only after this resolve function finishes
  resolve() {
    return this.eventService.getEvents().pipe(map((events) => events));
  }
}

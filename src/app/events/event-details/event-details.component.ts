import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService, IEvent, ISession } from '../shared';
import { Levels } from './level.model';

@Component({
  templateUrl: './event-details.component.html',
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }
      .event-image {
        height: 100px;
      }
      a {
        cursor: pointer;
      }
    `,
  ],
})
export class EventDetailsComponent implements OnInit {
  event?: IEvent;
  addMode: boolean = false;
  filterBy: Levels = Levels.All;
  levels = Levels; // need a copy of the enum for access in template

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.event = this.eventService.getEvent(
      Number(this.route.snapshot.params['id'])
    );
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const maxId = Math.max(...this!.event!.sessions!.map(({ id }) => id));
    session.id = maxId + 1;
    this.event?.sessions.push(session);
    this.eventService.updateEvent(this.event!);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}

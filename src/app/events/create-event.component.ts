import { Component } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  templateUrl: './create-event.component.html',
})
export class CreateEventComponent {
  constructor(private eventService: EventService) {}
}

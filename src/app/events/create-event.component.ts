import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/event.service';

@Component({
  templateUrl: './create-event.component.html',
})
export class CreateEventComponent {
  constructor(private router: Router, private eventService: EventService) {}

  cancel() {
    this.router.navigateByUrl('/events');
    // same as this.router.navigate(['/events'])
  }
}

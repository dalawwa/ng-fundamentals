import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const eventExists = Boolean(
      this.eventService.getEvent(Number(route.params['id']))
    );
    if (!eventExists) {
      this.router.navigate(['/404']);
    }
    return eventExists;
  }
}

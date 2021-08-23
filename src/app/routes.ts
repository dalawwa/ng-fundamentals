import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';

import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';
import { EventsListComponent } from './events/events-list.component';

export const appRoutes: Routes = [
  {
    path: 'events',
    component: EventsListComponent,
    // upon completion, the return value of EventlistResolver's resolve function will be stored in <ActivatedRoute>.snapshot.data['events']
    resolve: { events: EventListResolver },
  },
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService],
  },
  {
    path: '404',
    component: Error404Component,
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full',
  },
];

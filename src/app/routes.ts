import { Routes } from '@angular/router';

import { Error404Component } from './errors';
import {
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivatorService,
  EventListResolver,
  EventsListComponent,
} from './events';
import { CreateSessionComponent } from './events/event-details/create-session.component';

export const appRoutes: Routes = [
  {
    path: 'events/sessions/new',
    component: CreateSessionComponent,
    canDeactivate: ['canDeactivateCreateSession'],
  },
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
  {
    path: 'user',
    // when a route starts with /user then load our UserModule aka lazy loading
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];

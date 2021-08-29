import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ToastrService } from './common';
import { Error404Component } from './errors';
import { EventsAppComponent } from './events-app.component';
import {
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivatorService,
  EventListResolver,
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  SessionService,
  SessionListComponent,
} from './events';
import { NavBarComponent } from './nav';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';
import { FormValidatorService } from './common/form-validator.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }, // when not making a full service
    { provide: 'canDeactivateCreateSession', useValue: checkDirtyState }, // when not making a full service
    EventListResolver,
    AuthService,
    FormValidatorService,
    SessionService,
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(
  component: CreateEventComponent | CreateSessionComponent
) {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved this event, do you really want to cancel ?'
    );
  }
  return true;
}

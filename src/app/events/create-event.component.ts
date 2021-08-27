import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService, IEvent } from './shared';

@Component({
  templateUrl: './create-event.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error :-moz-placeholder {
        color: #999;
      }
      .error :ms-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class CreateEventComponent {
  isDirty: boolean = true;
  newEvent: any;
  constructor(private router: Router, private eventService: EventService) {}

  cancel() {
    this.router.navigateByUrl('/events');
    // same as this.router.navigate(['/events'])
  }

  saveEvent(formValue: NgForm['value']) {
    console.log(formValue);
    this.eventService.saveEvent(formValue);
    this.isDirty = false;
    this.router.navigate(['events']);
    return formValue;
  }
}

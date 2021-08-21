import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'events-thumbnail',
  templateUrl: 'events-thumbnail.component.html',
})
export class EventsThumbnailComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();
  handleClickMe() {
    console.log('clicked');
    this.eventClick.emit(this.event.name);
  }
}

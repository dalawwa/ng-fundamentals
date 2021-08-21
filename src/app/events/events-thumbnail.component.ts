import { Component, Input } from '@angular/core';

@Component({
  selector: 'events-thumbnail',
  templateUrl: 'events-thumbnail.component.html',
})
export class EventsThumbnailComponent {
  @Input() event: any;
}

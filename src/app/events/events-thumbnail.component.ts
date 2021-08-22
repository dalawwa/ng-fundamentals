import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'events-thumbnail',
  templateUrl: 'events-thumbnail.component.html',
  styles: [
    `
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
      .thumbnail {
        min-height: 210px;
      }
      .green {
        color: #003300 !important;
      }
      .bold {
        font-weight: bold;
      }
    `,
  ],
})
export class EventsThumbnailComponent {
  @Input() event: any;

  getStartTimeClass() {
    const isEarlyStart = this.event?.time === '8:00 am';
    return {
      green: isEarlyStart,
      bold: isEarlyStart,
    };
  }
}

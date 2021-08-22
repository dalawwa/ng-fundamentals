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

  // ngClass can remove a class added via the html class attribute but class binding can not
  // the order of styles applied comes from the CSS not from the order or method in which they're added in the template
  getStartTimeClass() {
    const isEarlyStart = this.event?.time === '8:00 am';
    // could return a comma separated string of class names or an array of classnames strings
    return {
      green: isEarlyStart,
      bold: isEarlyStart,
    };
  }
}

import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';
import { Levels } from './level.model';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnChanges {
  @Input() sessions?: ISession[];
  @Input() filterBy: Levels = Levels.All;

  visibleSessions?: ISession[] = this.sessions;

  ngOnChanges() {
    if (this.sessions) {
      if (this.filterBy === Levels.All) {
        this.visibleSessions = [...this.sessions];
      } else {
        this.visibleSessions = this.filterSessions(this.filterBy);
      }
    }
  }

  filterSessions(filterBy: Levels) {
    const regex = new RegExp(filterBy, 'i');
    const result = this.sessions!.filter((session) =>
      regex.test(session.level)
    );
    return result || [];
  }
}

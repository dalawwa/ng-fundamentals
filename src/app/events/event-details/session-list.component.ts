import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';
import { Levels } from './level.model';
import { SortKeys } from './sortkey.model';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnChanges {
  @Input() sessions?: ISession[];
  @Input() filterBy: Levels = Levels.All;
  @Input() sortBy: SortKeys = SortKeys.Votes;

  visibleSessions?: ISession[] = this.sessions;

  ngOnChanges() {
    if (this.sessions) {
      this.visibleSessions = this.filterSessions(this.filterBy);
      this.visibleSessions = this.sortSessions(
        this.visibleSessions,
        this.sortBy
      );
    }
  }

  filterSessions(filterBy: Levels) {
    if (filterBy === Levels.All) {
      return [...this.sessions!];
    } else {
      return this.sessions!.filter((session) =>
        new RegExp(filterBy, 'i').test(session.level)
      );
    }
  }

  private compareSessionByVotes(
    currentSession: ISession,
    nextSession: ISession
  ) {
    return currentSession.voters.length <= nextSession.voters.length ? 1 : -1;
  }

  private compareSessionsByName(
    currentSession: ISession,
    nextSession: ISession
  ) {
    return currentSession.name.localeCompare(nextSession.name);
  }

  sortSessions(sessions: ISession[], sortBy: SortKeys) {
    switch (sortBy) {
      case SortKeys.Votes:
        return sessions.sort(this.compareSessionByVotes);
      case SortKeys.Name:
        return sessions.sort(this.compareSessionsByName);
      default:
        return sessions.sort(this.compareSessionByVotes);
    }
  }
}

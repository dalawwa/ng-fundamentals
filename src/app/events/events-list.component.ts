import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service';

declare let toastr: any;
@Component({
  templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit {
  events?: any;
  constructor(
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName: string) {
    this.toastrService.success(eventName);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { FBEvent } from '../../shared/models/event.model';
import { Category } from '../../shared/models/category.model';

@Component({
  selector: 'fb-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss']
})
export class HistoryEventsComponent implements OnInit {
  @Input() categories: Category[] = [];
  @Input() events: FBEvent[] = [];

  constructor() { }

  ngOnInit() {
    this.events.forEach((e) => {
      e.cName = this.categories.find(c => c.id === e.category).name;
    });
  }

  getEventClass(e: FBEvent) {
    return {
      'label': true,
      'label-danger': e.type === 'outcome',
      'label-success': e.type === 'income'
    }
  }

}

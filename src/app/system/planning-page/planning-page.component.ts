import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { BillService } from '../shared/services/bill.service';
import { CategoriesService } from '../shared/services/categories.service';
import { EventsService } from '../shared/services/events.service';
import { Bill } from '../shared/models/bill.model';
import { Category } from '../shared/models/category.model';
import { FBEvent } from '../shared/models/event.model';

@Component({
  selector: 'fb-planning-page',
  templateUrl: './planning-page.component.html',
  styleUrls: ['./planning-page.component.scss']
})
export class PlanningPageComponent implements OnInit, OnDestroy {
  isLoaded = false;
  s1: Subscription;

  bill: Bill;
  categories: Category[] = [];
  events: FBEvent[] = [];

  constructor(private billService: BillService,
              private categoriesService: CategoriesService,
              private eventsService: EventsService) {
  }

  ngOnInit() {
    this.s1 = Observable.combineLatest(
      this.billService.getBill(),
      this.categoriesService.getCategories(),
      this.eventsService.getEvents()
    ).subscribe((data: [Bill, Category[], any]) => {
      this.bill = data[0];
      this.categories = data[1];
      this.events = data[2];

      this.isLoaded = true;
    });
  }

  getCategoryCost(c: Category): number {
    const cEvents = this.events.filter(e => e.category === c.id && e.type === 'outcome');
    return cEvents.reduce((total, e) => {
      total += e.amount;
      return total;
    }, 0);
  }

  private getPercent(c: Category): number {
    const percent = (100 * this.getCategoryCost(c)) / c.amount;
    return percent > 100 ? 100 : percent;
  }

  getCategoryPercent(c: Category): string {
    return this.getPercent(c) + '%';
  }

  getCategoryColorClass(c: Category): string {
    const percent = this.getPercent(c);
    return percent < 60 ? 'success' : percent >= 100 ? 'danger' : 'warning';
  }

  ngOnDestroy() {
    if (this.s1) this.s1.unsubscribe();
  }

}

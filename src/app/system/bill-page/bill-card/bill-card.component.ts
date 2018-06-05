import { Component, OnInit, Input } from '@angular/core';

import { Bill } from '../../shared/models/bill.model';

@Component({
  selector: 'fb-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {
  @Input() bill: Bill;
  @Input() currency: any;

  dollar: number;
  euro: number;

  constructor() { }

  ngOnInit() {
    const { rates } = this.currency;
    this.dollar =  this.bill.value / rates['RUB'] * rates['USD'];
    this.euro = this.bill.value / rates['RUB'];
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fb-history-chart',
  templateUrl: './history-chart.component.html',
  styleUrls: ['./history-chart.component.scss']
})
export class HistoryChartComponent {
  @Input() data;
  
}

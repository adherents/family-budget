import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fb-history-chart',
  templateUrl: './history-chart.component.html',
  styleUrls: ['./history-chart.component.scss']
})
export class HistoryChartComponent {
  @Input() data;
  
  colorScheme = {
    name: 'air',
    selectable: true,
    group: 'Continuous',
    domain: [
      '#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b'
    ]
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-metrics-card',
  templateUrl: './item-metrics.component.html',
  styleUrls: ['./item-metrics.component.css']
})
export class ItemMetricsComponent {
  @Input() description: string = '';
  @Input() value: number = 0;
  @Input() symbol: string = '';
  @Input() rate: string = ''
  @Input() cssClasses: string = ''

}

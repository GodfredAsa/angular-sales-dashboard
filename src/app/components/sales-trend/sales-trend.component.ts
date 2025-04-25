import { Component, Input } from '@angular/core';

@Component({
  selector: 'sales-trend-card',
  templateUrl: './sales-trend.component.html',
  styleUrls: ['./sales-trend.component.css']
})
export class SalesTrendComponent {
  @Input() description: string = ''
  @Input() date: string = ''
  @Input() forecastRate: string = ''
  @Input() viewDetails: string = ''
  @Input() term: string = ''

}

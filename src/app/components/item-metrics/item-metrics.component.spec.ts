import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMetricsComponent } from './item-metrics.component';

describe('ItemMetricsComponent', () => {
  let component: ItemMetricsComponent;
  let fixture: ComponentFixture<ItemMetricsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemMetricsComponent]
    });
    fixture = TestBed.createComponent(ItemMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, Input, OnChanges } from '@angular/core';
import { FakeDataService } from '../fake-data.service';
import { Item } from '../models/item.model';

@Component({
  selector: 'item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css'],
})
export class ItemMenuComponent implements OnChanges {
  @Input() name: string = '';
  @Input() id: number = 0;
  dataItem: Item[] = [];
  constructor(public data: FakeDataService) {}

  ngOnChanges(): void {
    this.data.menuItems$.subscribe((menuItem) => {
      this.dataItem = menuItem.filter((x) => x.parentId === this.id);
    });
  }
}

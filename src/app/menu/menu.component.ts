import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakeDataService } from '../fake-data.service';
import { Item } from '../models/item.model';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnDestroy {
  public mainMenu: Item[] = [];
  private menuItemsSub: Subscription;

  constructor(public data: FakeDataService) {
    this.menuItemsSub = this.data.menuItems$.subscribe((menuItem) => {
      this.mainMenu = menuItem.filter((x) => x.parentId === null);
    });
  }

  ngOnDestroy() {
    if (this.menuItemsSub) {
      this.menuItemsSub.unsubscribe();
    }
  }
}

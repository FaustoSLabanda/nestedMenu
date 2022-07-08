import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, of } from 'rxjs';
import { Item } from '../app/models/item.model';
@Injectable({
  providedIn: 'root',
})
export class FakeDataService {
  item: Item[] = [
    {
      name: 'Bebidas',
      id: 1,
      parentId: null,
    },
    {
      name: 'Comidas',
      id: 2,
      parentId: null,
    },
    {
      name: 'Limpieza',
      id: 3,
      parentId: null,
    },
    {
      name: 'Gaseosas',
      id: 100,
      parentId: 1,
    },
    {
      name: 'Con Alcohol',
      id: 1010,
      parentId: 100,
    },
    {
      name: 'Sin Alcohol',
      id: 1009,
      parentId: 100,
    },
    {
      name: 'Con Azúcar',
      id: 101,
      parentId: 1009,
    },
    {
      name: 'Sin Azucar',
      id: 103,
      parentId: 1009,
    },
    {
      name: 'Jugos',

      id: 189,
      parentId: 103,
    },
    {
      name: 'Energizantes',
      id: 1222,
      parentId: 103,
    },
    {
      name: 'Fruta',
      id: 1223,
      parentId: 1222,
    },
    {
      name: 'Sin grasa',
      id: 12231231,
      parentId: 1223,
    },
  ];
  menuItems = new BehaviorSubject<Item[]>(this.item);
  menuItems$ = this.menuItems.asObservable();
  constructor() {}

  hasChildren(id: number): boolean {
    return this.menuItems.getValue().some((x) => x.parentId === id);
  }

  addItem(item: Item) {
    this.item.push(item);
    this.menuItems.next(this.item);
  }
}

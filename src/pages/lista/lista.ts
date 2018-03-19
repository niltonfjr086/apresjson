import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'lista.html'
})
export class ListaPage {

  items: any = [];
  itemExpandHeight: number = 100;

  constructor(public navCtrl: NavController) {

    this.items = [
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false }
    ];

  }

  public expandItem(item) {

    this.items.map((listItem) => {

      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }

      return listItem;

    });

  }

  filtro = {
    expanded: false
  }
  public expand() {

    if (this.filtro.expanded) {
      this.filtro.expanded = false;
    } else {
      this.filtro.expanded = true;

    }

  }





}

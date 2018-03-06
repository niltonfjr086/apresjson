import { Component } from '@angular/core';

import { ListaPage } from '../lista/lista';
import { DetalhesPage } from '../detalhes/detalhes';
import { ApuracaoPage } from '../apuracao/apuracao';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ApuracaoPage;
  tab2Root = ListaPage;
  tab3Root = DetalhesPage;

  constructor() {

  }
}

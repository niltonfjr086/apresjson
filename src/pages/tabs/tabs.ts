import { Component } from '@angular/core';

import { ListaPage } from '../lista/lista';
import { DetalhesPage } from '../detalhes/detalhes';
import { ApuracaoController } from '../apuracao/ApuracaoController';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ApuracaoController;
  tab2Root = ListaPage;
  tab3Root = DetalhesPage;

  constructor() {

  }
}

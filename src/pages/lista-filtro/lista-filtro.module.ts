import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaFiltroPage } from './lista-filtro';

@NgModule({
  declarations: [
    ListaFiltroPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaFiltroPage),
  ],
})
export class ListaFiltroPageModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ListaPage } from '../pages/lista/lista';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { ApuracaoPage } from '../pages/apuracao/apuracao';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { BasejsonProvider } from '../providers/basejson/basejson';
import { ListaFiltroPageModule } from '../pages/lista-filtro/lista-filtro.module';


@NgModule({
  declarations: [
    MyApp,
    ListaPage,
    DetalhesPage,
    ApuracaoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ListaFiltroPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListaPage,
    DetalhesPage,
    ApuracaoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BasejsonProvider
  ]
})
export class AppModule {}

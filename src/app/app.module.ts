import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule, ViewController } from 'ionic-angular';
import { MyApp } from './app.component';

import { ListaPage } from '../pages/lista/lista';
import { DetalhesPage } from '../pages/detalhes/detalhes';

import { ApuracaoController } from '../pages/apuracao/ApuracaoController';
import { ApuracaoModalPageModule } from '../pages/apuracao-modal/apuracao-modal.module';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ApuracaoProvider } from '../providers/ApuracaoProvider';
import { ListExpandableComponent } from '../components/list-expandable/list-expandable';
import { AccordionMenuComponent } from '../components/accordion-menu/accordion-menu';
import { ComponentsModule } from '../components/components.module';
import { GenericProvider } from '../providers/GenericProvider';


@NgModule({
  declarations: [
    MyApp,
    ListaPage,
    DetalhesPage,
    ApuracaoController,
    TabsPage,
    ListExpandableComponent,
    AccordionMenuComponent
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListaPage,
    DetalhesPage,
    ApuracaoController,
    TabsPage
  ],
  
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ApuracaoModalPageModule
  ],



  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApuracaoProvider
  ]



})
export class AppModule {}

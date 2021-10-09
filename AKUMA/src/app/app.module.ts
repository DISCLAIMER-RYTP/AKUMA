import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CSGOPageComponent } from 'src/Pages&Components/CSGOPage/CSGOPage.component';
import { DotaPageComponent } from 'src/Pages&Components/DotaPage/DotaPage.component';
import { MainPageComponent } from 'src/Pages&Components/MainPage/MainPage.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CSGOPageComponent,
    DotaPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

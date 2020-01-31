import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular Material
import { MaterialsModule } from './_materials/materials.module';
// Componentes
import { WeatherListComponent } from './_components/weather-list/weather-list.component';
import { WeatherSearchComponent } from './_components/weather-search/weather-search.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    WeatherSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

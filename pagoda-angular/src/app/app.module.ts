import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IngredientiComponent } from './ingredienti/ingredienti.component';
import { HeroContentComponent } from './hero-content/hero-content.component';
import { RicettaComponent } from './ricetta/ricetta.component';
import { DailyDashComponent } from './daily-dash/daily-dash.component';
import { FooterComponent } from './footer/footer.component';
import { ValNutrComponent } from './val-nutr/val-nutr.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IngredientiComponent,
    HeroContentComponent,
    RicettaComponent,
    DailyDashComponent,
    FooterComponent,
    ValNutrComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

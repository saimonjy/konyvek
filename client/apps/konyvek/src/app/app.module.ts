import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { KonyvlistaComponent } from './konyvlista/konyvlista.component';
import { UjKonyvComponent } from './uj-konyv/uj-konyv.component';

@NgModule({
  declarations: [AppComponent, KonyvlistaComponent, UjKonyvComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { KonyvlistaComponent } from './konyvlista/konyvlista.component';
import { UjKonyvComponent } from './uj-konyv/uj-konyv.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KonyvComponent } from './konyv/konyv.component';

@NgModule({
  declarations: [AppComponent, KonyvlistaComponent, UjKonyvComponent, KonyvComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

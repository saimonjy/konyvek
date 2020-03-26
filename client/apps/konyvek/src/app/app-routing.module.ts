import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KonyvlistaComponent } from './konyvlista/konyvlista.component';
import { UjKonyvComponent } from './uj-konyv/uj-konyv.component';


const routes: Routes = [
  {path:'', component: KonyvlistaComponent},
  {path:'ujkonyv', component: UjKonyvComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

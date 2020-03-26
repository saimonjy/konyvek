import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KonyvlistaComponent } from './konyvlista/konyvlista.component';


const routes: Routes = [
  {path:'', component: KonyvlistaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

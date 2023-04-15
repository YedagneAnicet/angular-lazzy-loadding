import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListePersonneComponent } from './components/liste-personne/liste-personne.component';
import { CreerPersonneComponent } from './components/creer-personne/creer-personne.component';
import { VoirPersonneComponent } from './components/voir-personne/voir-personne.component';

const routes: Routes = [
  {
    path:"liste",
    component: ListePersonneComponent,
    children : [

    ]
  },
  { path: 'add', component: CreerPersonneComponent },
  { path: 'voir', component: VoirPersonneComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonneRoutingModule { }

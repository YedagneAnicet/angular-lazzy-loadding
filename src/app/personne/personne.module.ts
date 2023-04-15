import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonneRoutingModule } from './personne-routing.module';
import { ListePersonneComponent } from './components/liste-personne/liste-personne.component';
import { CreerPersonneComponent } from './components/creer-personne/creer-personne.component';
import { VoirPersonneComponent } from './components/voir-personne/voir-personne.component';


@NgModule({
  declarations: [
    ListePersonneComponent,
    CreerPersonneComponent,
    VoirPersonneComponent
  ],
  imports: [
    CommonModule,
    PersonneRoutingModule
  ]
})
export class PersonneModule { }

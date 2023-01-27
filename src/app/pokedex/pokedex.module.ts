import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { TypeListComponent } from './components/type-list/type-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainComponent,
    PokemonComponent,
    TypeListComponent,
    PokemonCardComponent
  ],
  exports:[
    MainComponent,
    PokemonComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PokedexModule { }

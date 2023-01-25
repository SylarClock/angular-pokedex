import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { TypeListComponent } from './components/type-list/type-list.component';



@NgModule({
  declarations: [
    MainComponent,
    PokemonComponent,
    TypeListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokedexModule { }

import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemons.interface';
import { PokedexServicenService } from '../../service/pokedex-servicen.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  

  constructor( private pokedexService: PokedexServicenService ){

  }
  get pokemons(): Pokemon[]{
    return this.pokedexService.pokemons;
  }

}

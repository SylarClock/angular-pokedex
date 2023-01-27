import { Component, Input, OnInit } from '@angular/core';
import { PokemonInfoResponse } from '../../interfaces/pokemonInfo.types';
import { PokedexServicenService } from '../../service/pokedex-servicen.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit{
  
  @Input() name: string = "";
  urlImage: string= "";
  id:number=0;

  pokemonInfo: PokemonInfoResponse | undefined;

  constructor( private pokedexService: PokedexServicenService ){

  }
  
  ngOnInit(): void {
    this.pokedexService.getPokemonInfo(this.name).subscribe(pokemon =>{
      console.log( "Pokemon Info: ", pokemon );
      this.urlImage = pokemon.sprites.front_default;
      this.id = pokemon.id;
      //pokemon.types.map.name
      this.pokemonInfo = pokemon;
    })
  }

}

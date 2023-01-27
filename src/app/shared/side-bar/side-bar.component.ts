import { Component } from '@angular/core';
import { faHeart, faMap } from '@fortawesome/free-regular-svg-icons'
import { PokedexServicenService } from 'src/app/pokedex/service/pokedex-servicen.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  icon = faMap;
  // type_list = [
  //   "fire",
  //   "water",
  //   "grass",
  //   "normal",
  //   "fighting"
  // ]

  constructor( private pokedexService: PokedexServicenService ){

  }

  get type_list(){
    return this.pokedexService.pokemonTypes;
  }

}

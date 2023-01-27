import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonInfoResponse } from '../interfaces/pokemonInfo.types';
import { Pokemon, PokemonResponse } from '../interfaces/pokemons.interface';
import { PokemonType, PokemonTypeResponse } from '../interfaces/pokemonTypes.interface';

@Injectable({
  providedIn: 'root'
})
export class PokedexServicenService {

  private apiUrl: string = "https://pokeapi.co/api/v2";

  private _pokemonTypes: PokemonType[] = [];
  private _pokemons:Pokemon[] = [];

  constructor( private http:HttpClient ) { 
    this.http.get<PokemonTypeResponse>(`${this.apiUrl}/type`)
      .subscribe((resp)=>{
        console.log(resp);
        this._pokemonTypes = resp.results;
        
    })

    this.http.get<PokemonResponse>(`${this.apiUrl}/pokemon?limit=20&offset=0`)
      .subscribe((resp)=>{

        console.log(resp);
        this._pokemons = resp.results;
        

      })

  }

  get pokemonTypes():PokemonType[]{
    return [ ...this._pokemonTypes ];
  }
  get pokemons():Pokemon[]{
    return[ ...this._pokemons ]
  }

  getPokemonInfo(name:string):Observable<PokemonInfoResponse>{
    return this.http.get<PokemonInfoResponse>(`${this.apiUrl}/pokemon/${name}`);
  }

}

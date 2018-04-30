import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokeapiService {

  constructor(private http: HttpClient) { }

  getPokemon(pokemon: string) {
    return this.http.get('/api/pokeapi/pokemon/' + pokemon);
  }

  getSprite(pokemon: string) {
    return this.http.get('/api/pokeapi/sprite/' + pokemon, {responseType: 'text'});
  }

}

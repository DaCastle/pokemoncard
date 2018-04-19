import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _httpService: Http) { }

  pokemon: any = {};
  abilities: string[] = [];
  stats: string[] = [];
  types: string[] = [];
  cardColor: string = "#ffffff";
  mainSprite: string = "/assets/images/cat.gif";
  mainSpriteBackgroundColor: string = "#ffffff";
  prev: string = "/assets/images/cat.gif";
  next: string = "/assets/images/cat.gif";
  searchValue: string = "";

  typeColors: {} = {
    "normal": "A8A77A",
    "bug": "A6B91A",
    "grass": "7AC74C",
    "fire": "EE8130",
    "water": "6390F0",
    "ice": "96D9D6",
    "electric": "F7D02C",
    "psychic": "F95587",
    "ghost": "735797",
    "fighting": "C22E28",
    "poison": "A33EA1",
    "ground": "E2BF65",
    "flying": "A98FF3",
    "rock": "B6A136",
    "dragon": "6F35FC",
    "dark": "705746",
    "steel": "B7B7CE",
    "fairy": "D685AD",
  };



  ngOnInit() {
    this._httpService.get('/api/pokeapi/pokemon/1').subscribe(values => {
      this.dataSetter(values);
      this.getPrevSprite(this.pokemon.id);
      this.getNextSprite(this.pokemon.id);
    });
  }


  getPokemon(idOrName): void {
    this.mainSprite = "/assets/images/cat.gif";
    this.prev = "/assets/images/cat.gif";
    this.next = "/assets/images/cat.gif";

    if (idOrName === 0) {
      idOrName = 802;
    }

    this._httpService.get('/api/pokeapi/pokemon/' + idOrName.toLowerCase()).subscribe(values => {
      this.dataSetter(values);
      this.getPrevSprite(this.pokemon.id);
      this.getNextSprite(this.pokemon.id);
    });
  }

  getSpriteUrl(property, id): void {
    this._httpService.get('/api/pokeapi/sprite/' + id).subscribe(spriteUrl => {
      this[property] = spriteUrl["_body"] as string;
    });
  }

  getNextSprite(id): void {
    if (id <= 801) {
      this.getSpriteUrl("next", id + 1);
    } else {
      this.getSpriteUrl("next", 1);
    }
  }  

  getPrevSprite(id): void {
    if (id >= 2) {
      this.getSpriteUrl("prev", id - 1);
    } else {
      this.getSpriteUrl("prev", 802);
    }
  }

  getCardColor(type): string {
    let color = "#ffffff";
    Object.keys(this.typeColors).forEach(listType => {
      if (type === listType) {
        color = "#" + this.typeColors[listType];
      }
    });
    color = this.hexToRgbA(color);
    return color;
  }

  dataSetter(values): void {
    this.pokemon = JSON.parse(values["_body"]);
    this.getSpriteUrl("mainSprite", this.pokemon.id);
    this.abilities = this.pokemon.abilities;
    this.stats = this.pokemon.stats;
    this.types = this.pokemon.types;
    this.cardColor = this.getCardColor(this.types[this.types.length - 1]["type"]["name"]);
    this.mainSpriteBackgroundColor = this.cardColor.replace(",.51)", ",1)");
  }

  hexToRgbA(hex): string {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',.5)';
  }
  throw new Error('Bad Hex');
}


}

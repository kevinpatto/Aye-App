import { Component, OnInit } from '@angular/core';
import { MainClient } from 'pokenode-ts';
// import {randomInt} from "crypto";
(async () => {
  const api = new MainClient();

  await api.pokemon
    .getPokemonByName('luxray')
    .then((data) => console.log(data.sprites)) // will output "Luxray"
    .catch((error) => console.error(error));
})();

@Component({
  selector: 'app-pokemon-twilight',
  templateUrl: './pokemon-twilight.component.html',
  styleUrls: ['./pokemon-twilight.component.scss']
})
export class PokemonTwilightComponent implements OnInit {

  public randomPokemonNumber = 0;
  public randomPokemonNumber2 = 0;

  public maxPokemonNum = 898;

  public todayDate = new Date();
  public todayDateAsInt = 0;
  public tmrwDate = new Date();
  public tmrwDateAsInt = 0;


  public pokemonSpriteURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  constructor() { }

  // TODO Make it not favor numbers between 400-600.

  ngOnInit(): void {
    this.todayDate.setHours(0,0,0,0);
    this.todayDateAsInt = Number(this.todayDate);

    // this.tmrwDate.setHours(0,0,0,0);
    // this.tmrwDate.setDate((this.tmrwDate.getDate() + 59) * 1000000);
    // this.tmrwDateAsInt = Number(this.tmrwDate);

    this.randomPokemonNumber = (this.todayDateAsInt);
    // this.randomPokemonNumber2 = (this.tmrwDateAsInt);

    while (this.randomPokemonNumber > 898) {
      this.randomPokemonNumber = this.randomPokemonNumber / 2
    }

    // while (this.randomPokemonNumber2 > 898) {
    //   this.randomPokemonNumber2 = this.randomPokemonNumber2 / 2
    // }

    this.randomPokemonNumber = Math.floor(this.randomPokemonNumber);
    console.log(Math.floor(this.randomPokemonNumber));
    // console.log(Math.floor(this.randomPokemonNumber2));

    this.pokemonSpriteURL = this.pokemonSpriteURL + this.randomPokemonNumber + ".png"

  }

  set setRandomPokemonNumber(value: number) {
    this.randomPokemonNumber = value;
  };

}

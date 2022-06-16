import { Component, OnInit } from '@angular/core';
import { MainClient } from 'pokenode-ts';
import { HttpHeaders } from '@angular/common/http';
import * as http from "http";
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../pokemon";
import {Observable} from "rxjs";

// import {randomInt} from "crypto";
// (async () => {
//   const api = new MainClient();
//
//   await api.pokemon
//     .getPokemonByName('25')
//     .then((data) => console.log(data.name)) // will output "Luxray"
//     .catch((error) => console.error(error));
// })();
@Component({
  selector: 'app-pokayemon',
  templateUrl: './pokayemon.component.html',
  styleUrls: ['./pokayemon.component.scss']
})
export class PokayemonComponent implements OnInit {



  public randomPokemonNumber = 0;
  public randomPokemonNumber2 = 0;

  public maxPokemonNum = 898;

  public todayDate = new Date();
  public todayDateAsInt = 0;
  public tmrwDate = new Date();
  public tmrwDateAsInt = 0;

  public foundPokemonName =  'test';

  public pokemonSpriteURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  constructor(
    private pokemonService: PokemonService
  ) { }

  // TODO Make it not favor numbers between 400-600.

  ngOnInit(): void {
    // console.log(this.todayDate.getDate());
    this.todayDate.setHours(0,0,0,0);
    this.todayDateAsInt = Number(this.todayDate) * 100000000000000;

    // console.log("todaydateasint is " + this.todayDateAsInt);
    this.tmrwDate.setHours(0,0,0,0);
    this.tmrwDate.setDate(this.tmrwDate.getDate() + 1);
    this.tmrwDateAsInt = Number(this.tmrwDate) * 1000000000000000;
    // console.log("tMRWdateasint is " + this.tmrwDateAsInt);

    this.randomPokemonNumber = (this.todayDateAsInt);
    this.randomPokemonNumber2 = (this.tmrwDateAsInt);
    // console.log(this.todayDateAsInt);
    // console.log(this.tmrwDateAsInt);
    while (this.randomPokemonNumber > 898) {
      // console.log(this.randomPokemonNumber);
      this.randomPokemonNumber = this.randomPokemonNumber / 2
    }

    while (this.randomPokemonNumber2 > 898) {
      console.log(this.randomPokemonNumber2);
      this.randomPokemonNumber2 = this.randomPokemonNumber2 / 2
    }

    this.randomPokemonNumber = Math.floor(this.randomPokemonNumber);
    this.randomPokemonNumber2 = Math.floor(this.randomPokemonNumber2);

    console.log(Math.floor(this.randomPokemonNumber));
    console.log(Math.floor(this.randomPokemonNumber2));

    this.pokemonSpriteURL = this.pokemonSpriteURL + this.randomPokemonNumber + ".png"


  this.pokemonService.getPokemonFromNum(this.randomPokemonNumber).subscribe(data => {
    this.foundPokemonName = data.name;
  })
    // this.getPokemonFromNum(this.randomPokemonNumber);
    // console.log(this.foundPokemonName);
  }

  // set setRandomPokemonNumber(value: number) {
  //   this.randomPokemonNumber = value;
  // };

  // async getPokemonFromNum(num: number) {
  //   this.foundPokemonName = this.pokemonService.getPokemonFromNum(num);
  //   // return this.foundPokemonName;
  // }

}

import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Pokemon } from './pokemon';
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonName$: string | undefined;

  private API: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private httpClient: HttpClient) {}

  getPokemonFromNum(num: number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.API}` + num + '/');
  }

  // Error handling
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

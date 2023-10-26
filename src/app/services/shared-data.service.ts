import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  get isDevMode(): string | null {
    return localStorage.getItem('ayeApp-isDevMode');
  }

  set isDevMode(value: string | null) {
    if (value !== null) {
      localStorage.setItem('ayeApp-isDevMode', 'true');
    } else {
      localStorage.removeItem('ayeApp-isDevMode');
    }
  }

}

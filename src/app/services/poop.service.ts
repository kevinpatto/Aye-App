import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Poop} from "../models/poop";

@Injectable({
  providedIn: 'root'
})
export class PoopService {

  public poopArray: Poop[] = [];

  constructor(
    private http: HttpClient,
  ) { }

getPoops(): Poop[] {
  const headers = {'Access-Control-Allow-Origin': '*'}
  this.http.get<any>('https://jonahtoch.com/catalog/poop/list-all', {headers}).subscribe(
    data => {
      this.poopArray.push(data);
    }
  )
  return this.poopArray;
}


}
